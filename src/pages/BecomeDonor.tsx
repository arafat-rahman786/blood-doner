
import bd from "bangladesh-geojson";
import { useForm, type SubmitHandler } from "react-hook-form";
import api from "../../lib/api"

type DonorFormValues = {
  name: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  lastDonationDate: string;
  isAvailable: string;
  division: string;
  district: string;
  upazila: string;
  area: string;
  address: string;
  contactConsent: boolean;
  privacyConsent: boolean;
};

export default function BecomeDonor() {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DonorFormValues>();

  const onSubmit: SubmitHandler<DonorFormValues> = async (data) => {
    reset()
    await api.post("/donorlist",data)
    window.location.href = "/"

  };

  const selectedDivision = watch("division");
  const selectedDistrict = watch("district");

  const divisions = bd.getDivisions();

  const districts = selectedDivision
    ? bd.getDistrictsByDivision(selectedDivision)
    : [];

  const upazilas = selectedDistrict
    ? bd.getUpazilasByDistrict(selectedDistrict)
    : [];

  return (
    <section className="min-h-screen bg-[#0d0e12] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
            রক্তবন্ধন পরিবারের সদস্য হোন
          </span>

          <h1 className="text-3xl font-bold sm:text-4xl">
            রক্তদাতা হিসেবে <span className="text-red-500">যুক্ত হোন</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400">
            আপনার সামান্য উদ্যোগই বাঁচাতে পারে একটি মূল্যবান প্রাণ। আজই রক্তদাতা
            হিসেবে নিবন্ধন করুন।
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 rounded-3xl border border-white/10 bg-[#17181e] p-5 shadow-2xl sm:p-8"
        >
          <div>
            <div className="mb-6 border-b border-white/10 pb-4">
              <h2 className="text-xl font-bold">ব্যক্তিগত তথ্য</h2>
              <p className="mt-1 text-sm text-gray-500">
                আপনার ব্যক্তিগত তথ্য প্রদান করুন
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-gray-300">
                  পূর্ণ নাম *
                </label>
                <input
                  type="text"
                  {...register("name", { required: "আপনার নাম লিখুন" })}
                  placeholder="আপনার সম্পূর্ণ নাম লিখুন"
                  className="w-full rounded-xl border border-white/10 bg-[#0d0e12] px-4 py-3.5 text-sm outline-none placeholder:text-gray-600 focus:border-red-500"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  মোবাইল নম্বর *
                </label>
                <input
                  type="tel"
                  {...register("phone", { required: "মোবাইল নম্বর লিখুন" })}
                  placeholder="০১XXXXXXXXX"
                  className="w-full rounded-xl border border-white/10 bg-[#0d0e12] px-4 py-3.5 text-sm outline-none placeholder:text-gray-600 focus:border-red-500"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  ইমেইল ঠিকানা
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="example@email.com"
                  className="w-full rounded-xl border border-white/10 bg-[#0d0e12] px-4 py-3.5 text-sm outline-none placeholder:text-gray-600 focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  জন্ম তারিখ *
                </label>
                <input
                  type="date"
                  {...register("dateOfBirth", { required: "জন্ম তারিখ নির্বাচন করুন" })}
                  className="w-full rounded-xl border border-white/10 bg-[#0d0e12] px-4 py-3.5 text-sm text-gray-400 outline-none focus:border-red-500"
                />
                {errors.dateOfBirth && (
                  <p className="mt-1 text-sm text-red-500">{errors.dateOfBirth.message}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">লিঙ্গ</label>
                <select
                  {...register("gender")}
                  className="w-full rounded-xl border border-white/10 bg-[#0d0e12] px-4 py-3.5 text-sm text-gray-400 outline-none focus:border-red-500"
                >
                  <option value="">নির্বাচন করুন</option>
                  <option value="male">পুরুষ</option>
                  <option value="female">নারী</option>
                  <option value="other">অন্যান্য</option>
                </select>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-7">
            <div className="mb-6">
              <h2 className="text-xl font-bold">রক্তদানের তথ্য</h2>
              <p className="mt-1 text-sm text-gray-500">
                আপনার রক্তদান সম্পর্কিত তথ্য দিন
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  রক্তের গ্রুপ *
                </label>
                <select
                  {...register("bloodGroup", { required: "রক্তের গ্রুপ নির্বাচন করুন" })}
                  className="w-full rounded-xl border border-white/10 bg-[#0d0e12] px-4 py-3.5 text-sm text-gray-400 outline-none focus:border-red-500"
                >
                  <option value="">রক্তের গ্রুপ নির্বাচন করুন</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
                {errors.bloodGroup && (
                  <p className="mt-1 text-sm text-red-500">{errors.bloodGroup.message}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  সর্বশেষ রক্তদানের তারিখ
                </label>
                <input
                  type="date"
                  {...register("lastDonationDate")}
                  className="w-full rounded-xl border border-white/10 bg-[#0d0e12] px-4 py-3.5 text-sm text-gray-400 outline-none focus:border-red-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-gray-300">
                  বর্তমানে রক্তদানে প্রস্তুত? *
                </label>
                <select
                  {...register("isAvailable", { required: "আপনার প্রস্তুতির অবস্থা নির্বাচন করুন" })}
                  className="w-full rounded-xl border border-white/10 bg-[#0d0e12] px-4 py-3.5 text-sm text-gray-400 outline-none focus:border-red-500"
                >
                  <option value="">নির্বাচন করুন</option>
                  <option value="true">হ্যাঁ, প্রস্তুত</option>
                  <option value="false">না, আপাতত প্রস্তুত নই</option>
                </select>
                {errors.isAvailable && (
                  <p className="mt-1 text-sm text-red-500">{errors.isAvailable.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-7">
            <div className="mb-6">
              <h2 className="text-xl font-bold">ঠিকানার তথ্য</h2>
              <p className="mt-1 text-sm text-gray-500">
                আপনার বর্তমান অবস্থানের তথ্য দিন
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-gray-300">বিভাগ *</label>
                <select
                  {...register("division", {
                    required: "বিভাগ নির্বাচন করুন",
                    onChange: () => {
                      setValue("district", "");
                      setValue("upazila", "");
                    },
                  })}
                  className="w-full rounded-xl border border-white/10 bg-[#0d0e12] px-4 py-3.5 text-sm text-gray-400 outline-none focus:border-red-500"
                >
                  <option value="">বিভাগ নির্বাচন করুন</option>
                  {divisions.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.bn_name}
                    </option>
                  ))}
                </select>
                {errors.division && (
                  <p className="mt-1 text-sm text-red-500">{errors.division.message}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">জেলা *</label>
                <select
                  disabled={!selectedDivision}
                  {...register("district", {
                    required: "জেলা নির্বাচন করুন",
                    onChange: () => {
                      setValue("upazila", "");
                    },
                  })}
                  className="w-full rounded-xl border border-white/10 bg-[#0d0e12] px-4 py-3.5 text-sm text-gray-400 outline-none focus:border-red-500 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <option value="">জেলা নির্বাচন করুন</option>
                  {districts.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.bn_name}
                    </option>
                  ))}
                </select>
                {errors.district && (
                  <p className="mt-1 text-sm text-red-500">{errors.district.message}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">উপজেলা *</label>
                <select
                  disabled={!selectedDistrict}
                  {...register("upazila", { required: "উপজেলা নির্বাচন করুন" })}
                  className="w-full rounded-xl border border-white/10 bg-[#0d0e12] px-4 py-3.5 text-sm text-gray-400 outline-none focus:border-red-500 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <option value="">উপজেলা নির্বাচন করুন</option>
                  {upazilas.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.bn_name}
                    </option>
                  ))}
                </select>
                {errors.upazila && (
                  <p className="mt-1 text-sm text-red-500">{errors.upazila.message}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">এলাকার নাম</label>
                <input
                  type="text"
                  {...register("area")}
                  placeholder="আপনার এলাকার নাম"
                  className="w-full rounded-xl border border-white/10 bg-[#0d0e12] px-4 py-3.5 text-sm outline-none placeholder:text-gray-600 focus:border-red-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-gray-300">বিস্তারিত ঠিকানা</label>
                <textarea
                  rows={3}
                  placeholder="আপনার বর্তমান ঠিকানা লিখুন"
                  {...register("address")}
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#0d0e12] px-4 py-3.5 text-sm outline-none placeholder:text-gray-600 focus:border-red-500"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-7">
            <h2 className="mb-5 text-xl font-bold">সম্মতি ও গোপনীয়তা</h2>

            <div className="space-y-4">
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-[#0d0e12] p-4">
                <input
                  type="checkbox"
                  {...register("contactConsent", {
                    required: "যোগাযোগের সম্মতি প্রদান করুন",
                  })}
                  className="mt-1 h-4 w-4 accent-red-500"
                />
                <span className="text-sm leading-6 text-gray-400">
                  আমি স্বেচ্ছায় রক্তদাতা হিসেবে নিবন্ধন করছি এবং প্রয়োজনের সময়
                  রক্তদানের বিষয়ে আমার সঙ্গে যোগাযোগ করার অনুমতি দিচ্ছি।
                </span>
              </label>
              {errors.contactConsent && (
                <p className="text-sm text-red-500">{errors.contactConsent.message}</p>
              )}

              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-[#0d0e12] p-4">
                <input
                  type="checkbox"
                  {...register("privacyConsent", {
                    required: "তথ্য শেয়ারের সম্মতি প্রদান করুন",
                  })}
                  className="mt-1 h-4 w-4 accent-red-500"
                />
                <span className="text-sm leading-6 text-gray-400">
                  প্রয়োজনের সময় অনুমোদিত ব্যক্তির সঙ্গে আমার যোগাযোগের তথ্য
                  শেয়ার করতে আমি সম্মতি দিচ্ছি।
                </span>
              </label>
              {errors.privacyConsent && (
                <p className="text-sm text-red-500">{errors.privacyConsent.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-4 font-semibold text-white transition hover:bg-red-700"
          >
            রক্তদাতা হিসেবে যুক্ত হোন
            <span>→</span>
          </button>

          <p className="text-center text-xs leading-6 text-gray-500">
            আপনার ব্যক্তিগত তথ্যের গোপনীয়তা রক্ষা করা হবে।
          </p>
        </form>
      </div>
    </section>
  );
}
