import axiosInstance from "@/api/axiosInstance";

export async function registerService(formData) {
  const { data } = await axiosInstance.post(
    "/auth/register",
    {
      ...formData,
      role: "user",
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return data;
}
