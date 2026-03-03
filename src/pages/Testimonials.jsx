import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "sonner";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const [newReview, setNewReview] = useState({
    name: "",
    location: "",
    rating: 0,
    comment: "",
  });

  const [submittingReview, setSubmittingReview] = useState(false);

  const defaultTestimonials = [
    {
      id: "1",
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      comment:
        "Tiger Atta has been my family's favorite for years! The rotis come out soft and fluffy every time.",
      is_featured: true,
    },
    {
      id: "2",
      name: "Rajesh Kumar",
      location: "Jaipur, Rajasthan",
      rating: 5,
      comment:
        "Best quality atta in the market. Customers love it and always come back for more!",
      is_featured: true,
    },
  ];

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "testimonials")
        );

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setTestimonials(data.length > 0 ? data : defaultTestimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setTestimonials(defaultTestimonials);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const renderStars = (rating) => (
    <div className="flex gap-1 mt-2">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={
            index < rating ? "text-blue-500" : "text-slate-300"
          }
          size={18}
        />
      ))}
    </div>
  );

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (!newReview.name || !newReview.comment || newReview.rating === 0) {
      toast.error("Please fill all required fields.");
      return;
    }

    setSubmittingReview(true);

    try {
      await addDoc(collection(db, "testimonials"), {
        ...newReview,
        is_featured: false,
        createdAt: serverTimestamp(),
      });

      toast.success("Thank you for your review!");

      setNewReview({
        name: "",
        location: "",
        rating: 0,
        comment: "",
      });

    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setSubmittingReview(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-slate-100 to-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            What Our Customers Say
          </motion.h1>
          <p className="text-lg text-slate-600">
            Trusted by families across India.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          {loading ? (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-slate-600">Loading testimonials...</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  whileHover={{ y: -8 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white border rounded-3xl p-8 shadow-md hover:shadow-xl transition ${
                    testimonial.is_featured
                      ? "border-blue-600 ring-2 ring-blue-400"
                      : "border-slate-200"
                  }`}
                >
                  {testimonial.is_featured && (
                    <div className="absolute -top-4 left-6 px-4 py-1 bg-blue-600 text-white text-xs rounded-full shadow">
                      Featured Review
                    </div>
                  )}

                  <FaQuoteLeft className="text-blue-200 mb-4" size={36} />

                  <p className="text-slate-700 mb-6">
                    "{testimonial.comment}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                      {testimonial.name?.charAt(0)}
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-slate-500">
                        {testimonial.location}
                      </p>
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* WRITE REVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Write a Review
            </h2>
            <p className="text-slate-600">
              Share your experience with Tiger Atta
            </p>
          </div>

          <form
            onSubmit={handleReviewSubmit}
            className="bg-white border border-slate-200 rounded-3xl p-10 shadow-lg space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name *"
              value={newReview.name}
              onChange={(e) =>
                setNewReview({ ...newReview, name: e.target.value })
              }
              className="w-full p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
              required
            />

            <input
              type="text"
              placeholder="Your Location"
              value={newReview.location}
              onChange={(e) =>
                setNewReview({ ...newReview, location: e.target.value })
              }
              className="w-full p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
            />

            <div>
              <p className="mb-2 font-semibold text-slate-700">
                Your Rating *
              </p>
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    size={28}
                    className={`cursor-pointer ${
                      star <= newReview.rating
                        ? "text-blue-500"
                        : "text-slate-300"
                    }`}
                    onClick={() =>
                      setNewReview({
                        ...newReview,
                        rating: star,
                      })
                    }
                  />
                ))}
              </div>
            </div>

            <textarea
              rows="4"
              placeholder="Your Review *"
              value={newReview.comment}
              onChange={(e) =>
                setNewReview({
                  ...newReview,
                  comment: e.target.value,
                })
              }
              className="w-full p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
              required
            />

            <button
              type="submit"
              disabled={submittingReview}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full font-semibold shadow-md hover:scale-105 transition"
            >
              {submittingReview ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Testimonials;