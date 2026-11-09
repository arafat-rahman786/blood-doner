import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../lib/api";
import type { Donor } from "../../data/donars";
import Navber from "../components/Navber";
import Footer from "../components/Footer";

export default function DonorDetails() {
  const { id } = useParams();
  const [donor, setDonor] = useState<Donor | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDonor = async () => {
      try {
        const res = await api.get(`/donorlist/${id}`);
        setDonor(res.data);
      } catch (error) {
        console.log("তথ্য আনতে সমস্যা হয়েছে:", error);
      } finally {
        setLoading(false);
      }
    };

    getDonor();
  }, [id]);

  if (loading) {
    return <div>তথ্য লোড হচ্ছে...</div>;
  }

  if (!donor) {
    return <div>রক্তদাতাকে খুঁজে পাওয়া যায়নি!</div>;
  }

  return (
   <>
    <Navber />
    <div className=" bg-[#0d0e12] px-4 py-20 text-white">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[#17181e] p-8">
        <h1 className="text-3xl font-bold">{donor.name}</h1>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div>
            <p className="text-gray-400">রক্তের গ্রুপ</p>
            <p className="mt-1 text-xl font-bold text-red-500">
              {donor.bloodGroup}
            </p>
          </div>

          <div>
            <p className="text-gray-400">বিভাগ</p>
            <p className="mt-1">{donor.division}</p>
          </div>

          <div>
            <p className="text-gray-400">জেলা</p>
            <p className="mt-1">{donor.district}</p>
          </div>

          <div>
            <p className="text-gray-400">উপজেলা</p>
            <p className="mt-1">{donor.upazila}</p>
          </div>

          <div>
            <p className="text-gray-400">মোবাইল নম্বর</p>
              <a href={`tel:${donor.phone}`} className="mt-1 block text-red-400">
                {donor.phone}
              </a>
          </div>

          <div>
            <p className="text-gray-400">রক্তদানের অবস্থা</p>
            <p className="mt-1">
              {donor.isAvailable ? "রক্ত দিতে প্রস্তুত" : "বর্তমানে প্রস্তুত নন"}
            </p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
   </>
  );
}


