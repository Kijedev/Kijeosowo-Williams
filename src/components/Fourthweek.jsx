import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import Week4 from "../Image/Week_4new.jpeg";
import Footer from "../components/Footer";

const Fourthweek = () => {
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
            Month 1, Week 4
          </h1>
          <p className="text-gray-500 mt-2">Published Jan 22, 2025 · 2 min read</p>
        </div>

        <img
          src={Week4 || "/placeholder.svg"}
          alt="cover image"
          className="w-full rounded-lg transition-transform duration-300"
        />

        {/* Article Content */}
        <div className="space-y-6 py-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            🚀 Wrapping Up Month One of My Mobile Frontend Engineering Journey!
          </h2>

          <p className="text-xl">
            Week 4 was packed with incredible learning and growth as I explored
            React Native further. Here’s a summary of how my first month went:
          </p>

          <ul className="space-y-3">
            <li>
              <span className="font-bold">1️⃣ Created My First React Native Project:</span>{" "}
              I successfully built a project using{" "}
              <code className="bg-white/10 p-2 rounded">Expo Go</code>, setting a
              solid foundation for mobile development.
            </li>
            <li>
              <span className="font-bold">2️⃣ Mastered Basic Components:</span>{" "}
              Gained hands-on experience with essential components like{" "}
              <code className="bg-white/10 p-2 rounded">View</code>,{" "}
              <code className="bg-white/10 p-2 rounded">Text</code>,{" "}
              <code className="bg-white/10 p-2 rounded">Image</code>,{" "}
              <code className="bg-white/10 p-2 rounded">StatusBar</code>,{" "}
              <code className="bg-white/10 p-2 rounded">ScrollView</code>,{" "}
              <code className="bg-white/10 p-2 rounded">Pressable</code>,{" "}
              <code className="bg-white/10 p-2 rounded">Platform</code>,{" "}
              <code className="bg-white/10 p-2 rounded">SafeAreaView</code>,{" "}
              <code className="bg-white/10 p-2 rounded">StyleSheet</code> and more
              to craft user interfaces.
            </li>
          </ul>

          <p className="text-xl">
            Wrapping up Month 1 feels exciting — the journey has just begun, and
            I’m ready to dive deeper into React Native in Month 2. 🚀
          </p>

          {/* Example Code Snippet */}
          <pre className="bg-white/5 text-green-400 p-10 rounded-lg overflow-x-auto">
            <code>{`import React from "react";
import { View, Text, Image, StyleSheet, StatusBar, ScrollView, Pressable, Platform, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ScrollView style={styles.container}>
        
        {/* Header */}
        <Text style={styles.heading}>Month 1 Wrap-Up 🚀</Text>
        <Text style={styles.subText}>Building my React Native foundation</Text>

        {/* Image */}
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={styles.image}
        />

        {/* Button */}
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Let’s Go to Month 2 ➡️</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#111" },
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 28, fontWeight: "bold", color: "white", marginBottom: 10 },
  subText: { fontSize: 16, color: "#aaa", marginBottom: 20 },
  image: { width: 120, height: 120, marginBottom: 20 },
  button: { backgroundColor: "#1DA1F2", padding: 15, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "white", fontWeight: "600" },
});`}</code>
          </pre>
        </div>

        {/* Footer Section */}
        <div className="border-t border-white/20 mt-12 pt-6 flex justify-between text-sm text-gray-500">
          <Link to="/Thirdweek" className="hover:text-white/80">
            ← Previous Article
          </Link>
          <Link to="/Fifthweek" className="hover:text-white/80">
            Next Article →
          </Link>
        </div>
      </article>

      <Footer />
    </motion.div>
  );
};

export default Fourthweek;
