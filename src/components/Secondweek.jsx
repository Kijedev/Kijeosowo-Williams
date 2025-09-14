import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import Week1 from "../Image/Week_1new.png";
import Footer from "../components/Footer";

const Secondweek = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-br from-[#111] via-[#000] to-black"
    >
      <article className="prose prose-lg dark:prose-invert mx-auto px-4 py-28 max-w-3xl">
        {/* Breadcrumb */}
        <Link to="/" className="text-white flex gap-3">
          <ArrowLeft className="text-1xl bg-white/20 p-2 rounded-full w-8 h-8 flex items-center justify-center" />
          Back to Home
        </Link>

        {/* Hero */}
        <div className="my-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Month 1, Week 2
          </h1>
          <p className="text-gray-500 mt-2">
            Published Jan 8, 2025 · 1 min read
          </p>
        </div>

        <img
          src={Week1 || "/placeholder.svg"}
          alt="cover image"
          className="w-full rounded-lg transition-transform duration-300"
        />

        {/* Article Content */}
        <div className="space-y-6 py-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p className="text-xl">
            This week, I dove into the fundamentals of React Native development
            and Here’s what I achieved:
          </p>
          <li>I Learned how to set up a React Native project using Expo Go.</li>{" "}
          <li>
            I Successfully launched simulators: iOS (Xcode) and Android (Android
            Studio) to test my apps.
          </li>{" "}
          <p className="text-xl">
            I Explored key components in React Native like:{" "}
          </p>
          <li>
            <code className="bg-white/10 p-2 rounded">View:</code> A container
            for organizing layout and UI elements.
          </li>
          <li>
            <code className="bg-white/10 p-2 rounded">Text:</code> Used to
            display text content in the app.
          </li>
          <li>
            <code className="bg-white/10 p-2 rounded">StyleSheet:</code>: A way
            to define and manage styles for components.
          </li>
          <li>
            <code className="bg-white/10 p-2 rounded">Modal:</code> : A
            component for creating overlays or popups
          </li>
          <li>
            <code className="bg-white/10 p-2 rounded">Image:</code>: Displays
            images in the app.
          </li>{" "}
          <li>
            <code className="bg-white/10 p-2 rounded">ScrollView:</code> :
            Enables scrolling through long content.
          </li>{" "}
          <li>
            <code className="bg-white/10 p-2 rounded">Pressable:</code> :
            Responds to user interactions like taps.
          </li>{" "}
          <li>
            <code className="bg-white/10 p-2 rounded">Button:</code> : A simple
            component to trigger actions.
          </li>{" "}
          <li>
            <code className="bg-white/10 p-2 rounded">StatusBar:</code> :
            Controls the app’s status bar appearance.
          </li>{" "}
          <li>
            <code className="bg-white/10 p-2 rounded">ActivityIndicator:</code>{" "}
            : Displays a loading spinner.
          </li>{" "}
          <p className="text-xl">
            I also built a Counter App that increases or decreases numbers using
            React’s useState() hook. To test, I launched the app on a Pixel 4
            Android simulator running Android 15 with a resolution of 1080x2280
            and 440dpi.
          </p>
          <pre className="bg-white/5 text-green-400 p-10 rounded-lg overflow-x-auto">
            <code>{`import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  Pressable,
  Modal,
  ActivityIndicator,
  StatusBar,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Hero */}
      <Text style={styles.heading}>Month 1, Week 2 🚀</Text>
      <Text style={styles.subText}>Learning React Native Basics</Text>

      {/* Image */}
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.image}
      />

      {/* Counter */}
      <Text style={styles.counter}>Counter: {count}</Text>
      <View style={styles.row}>
        <Button title="➕ Increase" onPress={() => setCount(count + 1)} />
        <Button title="➖ Decrease" onPress={() => setCount(count - 1)} />
      </View>

      {/* Pressable */}
      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.pressable}
      >
        <Text style={styles.pressableText}>Open Modal</Text>
      </Pressable>

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modal}>
          <Text style={styles.modalText}>Hello from a Modal 🎉</Text>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      {/* Loader */}
      <Pressable
        onPress={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 2000);
        }}
        style={styles.pressable}
      >
        <Text style={styles.pressableText}>Show Loader</Text>
      </Pressable>
      {loading && <ActivityIndicator size="large" color="#00ffcc" />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#111", padding: 20 },
  heading: { fontSize: 28, fontWeight: "bold", color: "white", marginBottom: 10 },
  subText: { fontSize: 16, color: "#aaa", marginBottom: 20 },
  image: { width: 100, height: 100, marginBottom: 20 },
  counter: { fontSize: 20, color: "white", marginVertical: 10 },
  row: { flexDirection: "row", justifyContent: "space-between", marginVertical: 10 },
  pressable: { backgroundColor: "#333", padding: 12, borderRadius: 8, marginVertical: 10 },
  pressableText: { color: "white", textAlign: "center" },
  modal: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.7)" },
  modalText: { fontSize: 22, color: "white", marginBottom: 20 },
});
`}</code>
          </pre>
        </div>

        {/* Footer Section */}
        <div className="border-t border-white/20 mt-12 pt-6 flex justify-between text-sm text-gray-500">
          <Link to="/firstweek" className="hover:text-white/80">
            ← Previous Article
          </Link>
          <Link to="/thirdweek" className="hover:text-white/80">
            Next Article →
          </Link>
        </div>
      </article>

      <Footer />
    </motion.div>
  );
};

export default Secondweek;
