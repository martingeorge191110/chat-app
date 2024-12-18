import React, { useEffect, useState } from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.tsx";
import { ChangeProfileValues, UserAccount } from "../../app.types.ts";




const ProfileCard: React.FC = () => {
  const user: UserAccount = useSelector(
    (state: RootState) => state.user.data
  );

  const [photo, setPhoto] = useState<string | null>(user.avatar)

  const [last_n, setLast_n] = useState<ChangeProfileValues>({show:false, value: user.last_n})
  const [first_n, setFirst_n] = useState<ChangeProfileValues>({show: false, value: user.first_n})
  const [bio, setBio] = useState<ChangeProfileValues>({show: false, value: user.bio})
  const [phone, setPhone] = useState<ChangeProfileValues>({show: false, value: user.phone})

  const [changeBtn, setChangeBtn] = useState<boolean>(false)


  useEffect(() => {
    if (!first_n.show)
      setFirst_n({...first_n, value: user.first_n})
    if (!last_n.show)
      setLast_n({...last_n, value: user.last_n})
    if (!bio.show)
      setBio({...bio, value: user.bio})
    if (!phone.show)
      setPhone({...phone, value: user.phone})

    if (bio.show || first_n.show || last_n.show || phone.show)
      setChangeBtn(true)
    else
      setChangeBtn(false)
  }, [first_n.show, last_n.show, bio.show, phone.show])


  const handleEditPhoto = (file: File | undefined) => {
    if (!file) return; // If no file is selected, exit the function.
  
    // Check for valid image file type
    const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validImageTypes.includes(file.type)) {
      alert("Please select a valid image file (JPEG, PNG, GIF).");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setPhoto(e.target.result as string)
      }
    };
    reader.readAsDataURL(file);
  };
  

  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-center mb-6 relative">
          <img src={`${photo || user.avatar || "https://via.placeholder.com/150"}`} alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-teal-300"/>
          <label className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full p-1 cursor-pointer">
            <FontAwesomeIcon className="text-teal-500 hover:text-teal-700" icon={faEdit}/>
            <input  type="file" accept="image/*"  className="hidden"  onChange={(e) => handleEditPhoto(e.target.files?.[0])}/>
          </label>
        </div>

        <div className="space-y-4">
          {/* First Name */}
          <div className="flex justify-between items-center">
            {first_n.show ? (
              <input
                value={first_n.value}
                onChange={(e) => setFirst_n({...first_n, value: e.target.value})}
                type="text"
                className="w-[80%] rounded-md border border-gray-300 px-3 py-1 focus:ring focus:ring-blue-200 focus:border-blue-400"
                placeholder={user.first_n}
              />
            ) : (
              <span className="text-gray-700">{user.first_n}</span>
            )}
            <button
              onClick={() => setFirst_n({...first_n, show: !first_n.show})}
              className="text-blue-500 hover:text-blue-600">
              <FontAwesomeIcon
                className="transition-all duration-150 hover:text-teal-700 text-teal-500"
                icon={faEdit}
              />
            </button>
          </div>
          {/* Last Name */}
          <div className="flex justify-between items-center">
            {last_n.show ? (
              <input
                value={last_n.value}
                onChange={(e) => setLast_n({...last_n, value: e.target.value})}
                id={`last_n${Math.random()}`}
                type="text"
                className="w-[80%] rounded-md border border-gray-300 px-3 py-1 focus:ring focus:ring-blue-200 focus:border-blue-400"
                placeholder={user.last_n}
              />
            ) : (
              <span className="text-gray-700">{user.last_n}</span>
            )}
            <button
              onClick={() => setLast_n({...last_n, show: !last_n.show})}
              className="text-blue-500 hover:text-blue-600"
            >
              <FontAwesomeIcon
                className="transition-all duration-150 hover:text-teal-700 text-teal-500"
                icon={faEdit}
              />
            </button>
          </div>
          {/* Bio */}
          <div className="flex justify-between items-center">
            {bio.show ? (
              <textarea
              value={bio.value}
              onChange={(e) => setBio({...bio, value: e.target.value})}
                className="w-[80%] rounded-md border border-gray-300 px-3 py-1 focus:ring focus:ring-blue-200 focus:border-blue-400"
                placeholder={user.bio || "Creative Designer"}
              ></textarea>
            ) : (
              <span className="text-gray-700">Bio: {bio.value}</span>
            )}
            <button
              onClick={() => setBio({...bio, show: !bio.show})}
              className="text-blue-500 hover:text-blue-600"
            >
              <FontAwesomeIcon
                className="transition-all duration-150 hover:text-teal-700 text-teal-500"
                icon={faEdit}
              />
            </button>
          </div>
          {/* Phone */}
          <div className="flex justify-between items-center">
            {phone.show ? (
              <input
                value={bio.value}
                onChange={(e) => setPhone({...phone, value: e.target.value})}
                type="text"
                className="w-[80%] rounded-md border border-gray-300 px-3 py-1 focus:ring focus:ring-blue-200 focus:border-blue-400"
                placeholder={user.phone || "123-456-7890"}
              />
            ) : (
              <span className="text-gray-700">phone: {user.phone}</span>
            )}
            <button
              onClick={() => setPhone({...phone, show: !phone.show})}
              className="text-blue-500 hover:text-blue-600"
            >
              <FontAwesomeIcon
                className="transition-all duration-150 hover:text-teal-700 text-teal-500"
                icon={faEdit}
              />
            </button>
          </div>
          {/* Email */}
          <div className="flex justify-between items-center">
              <span className="text-gray-700">{user.email}</span>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          {
            changeBtn && <button className="bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-500 transition-all duration-150">
              Save Changes
            </button>
          }
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400 transition-all duration-150">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
