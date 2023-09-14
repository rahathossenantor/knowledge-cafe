import profilePicture from "../../assets/images/profile.png"

const Header = () => {
    return (
        <div className="navbar bg-base-100 mt-3">
            <div className="flex-1">
                <a className="text-3xl cursor-pointer font-semibold">Knowledge Cafe</a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={profilePicture} />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;