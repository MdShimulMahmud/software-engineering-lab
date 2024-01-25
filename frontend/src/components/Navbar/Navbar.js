import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchLoggedOutUser, fetchUser } from "../../features/auth/authSlice";
import { fetchUserProfile } from "../../features/profile/profileSlice";
import logo from "../Navbar/logo.png";
import "./Navbar.css";
// console.log(logo);

const Navbar = () => {
  const { isLoggedIn, user, role } = useSelector((state) => state.auth);
  // console.log(isLoggedIn, role);
  const image = user?.profile?.images[0];

  const profile = user?.profile | {};
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const name = user?.name;
  // console.log(user);

  const handleLogout = async () => {
    dispatch(fetchLoggedOutUser());
    localStorage.clear();
    navigate("/login");
  };
  const handleProfile = async () => {
    dispatch(fetchUserProfile());
    navigate("/profile");
  };

  return (
    <div className="navbar bg-custom text-black fixed top-0 w-full z-20 px-20 sm:px-2">
      <div className="flex-1">
        <Link to="/" className="flex flex-row">
          <div>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
          <div className="text-xl mt-6">
            <span>
              RentSpot : <small>Home Near CUET</small>
            </span>
          </div>
        </Link>
        {/* <Link to="/" className="btn btn-ghost text-xl bg-gray">
          RentSpot : <small>Home Near CUET</small>
        </Link> */}
      </div>
      <div className="flex-none gap-2">
        <form className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-100 md:w-auto bg-slate-50"
          />
        </form>
        <div>
          {isLoggedIn && role === "SELLER" && (
            <Link to="/posts/create" className="btn btn-ghost bg-custom1">
              Add Post
            </Link>
          )}
          {!isLoggedIn && (
            <>
              <Link to="/login" className="btn btn-ghost bg-blue-400">
                Login
              </Link>
              <Link to="/register" className="btn mx-3 btn-ghost bg-blue-400">
                Register
              </Link>
            </>
          )}
          {/* {!isLoggedIn && (
            
          )} */}
        </div>

        {isLoggedIn && (
          <>
            <div className="button-72">
              <button className="" onClick={handleProfile} type="button">
                {name}
              </button>
            </div>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar online"
              >
                {/* {console.log(profile)} */}
                {profile.image === 0 ? (
                  <div className="w-10 rounded-full">
                    <img alt={name[0]} src={image} />{" "}
                  </div>
                ) : (
                  <div className="avatar  placeholder w-16">
                    {/* {console.log(name)} */}
                    <div className="bg-neutral text-neutral-content rounded-full">
                      <span className="text-xl">
                        {name && name[0] !== null ? name[0].toUpperCase() : "X"}
                      </span>
                    </div>
                  </div>
                )}

                {/* <div className="w-10 rounded-full">
                  <img alt={name[0]} src={profile !== null ? image : null} />
                </div> */}
              </div>

              <ul
                tabIndex={0}
                className="mt-3 z-[1] py-3 shadow menu menu-sm dropdown-content bg-white rounded-box w-60"
              >
                <li className="p-1">
                  <button onClick={handleLogout} type="button">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
