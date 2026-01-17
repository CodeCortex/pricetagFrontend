import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import { getCurrentUser } from '../../api/auth';
import Loader from '../../components/common/Loader/Loader';
import { showToast } from '../../utils/customToast';
import Input from '../../components/common/Input/Input';


const AdminProfile = () => {
  // const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken");

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const resp = await getCurrentUser({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      setUser(resp.data.data);

    } catch (err) {
      console.error(err.response?.data?.message);
      showToast("error", err.response?.data?.message);

    } finally {
      setLoading(false);
    }
  };

  // if (loading) return <Loader />;
  if(loading) return <p>Loading....</p>
  if (!user) return <p>No user data found</p>;

  return (
  <div className="h-full bg-gray-50 flex items-center justify-center px-4">
    <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-8">

        {/* Avatar */}
        <div className="relative">
          <img
            src={user.avatar}
            alt="avatar"
            className="h-36 w-36 rounded-full object-cover border-4 border-orange shadow-lg"
          />
          <span className="absolute bottom-2 right-2 bg-green-500 h-4 w-4 rounded-full border-2 border-white"></span>
        </div>

        {/* Info */}
        <div className="flex-1 space-y-3">

          <span className="inline-block bg-orange text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
            {user.role}
          </span>

          <h2 className="text-2xl font-bold text-gray-800 capitalize">
            {user.fullName}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">

            <p>
              <span className="font-semibold text-gray-800">Username:</span>{" "}
              {user.userName}
            </p>

            <p>
              <span className="font-semibold text-gray-800">Email:</span>{" "}
              {user.email}
            </p>

            <p>
              <span className="font-semibold text-gray-800">Contact:</span>{" "}
              {user.contactNo}
            </p>

            <p>
              <span className="font-semibold text-gray-800">Role:</span>{" "}
              {user.role}
            </p>

            <p className="md:col-span-2">
              <span className="font-semibold text-gray-800">Joined:</span>{" "}
              {new Date(user.createdAt).toDateString()}
            </p>

          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        <button className="px-5 py-2 bg-orange text-white rounded-lg shadow hover:opacity-90 transition">
          Edit Profile
        </button>

        <button className="px-5 py-2 border border-orange text-orange rounded-lg hover:bg-orange hover:text-white transition">
          Change Password
        </button>
      </div>

    </div>
  </div>
);

};


export default AdminProfile
