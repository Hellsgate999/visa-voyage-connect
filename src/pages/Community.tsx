import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import CreatePostModal from "@/components/community/CreatePostModal";
import AuthHeader from "@/components/layout/AuthHeader";

const Community = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(data);
    };
    fetchPosts();
  }, [isModalOpen]);

  const filteredPosts = posts.filter((post) => post.type === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <AuthHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
        {["experience", "discussion", "companion", "accommodation"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full ${activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "experience" ? "Visa Experience" : tab === "discussion" ? "Discussion" : tab === "companion" ? "Travel Companion" : "Accommodation"}
          </button>
        ))}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        + Create {activeTab === "experience" ? "Experience" : activeTab === "discussion" ? "Discussion" : activeTab === "companion" ? "Companion" : "Accommodation"} Post
      </button>

      <div className="mt-8 space-y-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-bold">{post.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{post.content}</p>
              {post.country && <p className="mt-2"><strong>From:</strong> {post.country}</p>}
              {post.flightDetails && (
                <div className="text-sm mt-2">
                  <p><strong>Flight:</strong> {post.flightDetails.from} ➔ {post.flightDetails.to}</p>
                  <p><strong>Airline:</strong> {post.flightDetails.airline} | <strong>PNR:</strong> {post.flightDetails.pnr}</p>
                  <p><strong>Date:</strong> {post.flightDetails.date} | <strong>Time:</strong> {post.flightDetails.time}</p>
                </div>
              )}
              {post.visaType && <p><strong>Visa Type:</strong> {post.visaType}</p>}
              {post.status && (
                <p className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${post.status === "Approved" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                  {post.status}
                </p>
              )}
              <p className="text-xs text-gray-400 mt-2">Posted: {post.createdAt?.toDate()?.toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No posts yet. Be the first to share your story!</p>
        )}
      </div>

      <CreatePostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type={activeTab} />
      </div>
    </div>
  );
};

export default Community;