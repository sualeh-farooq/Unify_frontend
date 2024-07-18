import Image from "next/image"
export default function TeamCard(){
    return (
        <>
          <div className="card team_member_card">
                                            <div className="card-body">
                                                <div className="flex justify-between flex-wrap gap-3">
                                                    <div className="flex">
                                                        <div className="profile_space">
                                                            <Image
                                                                width={70}
                                                                height={70}
                                                                src="/images/user/user-03.png"
                                                                style={{
                                                                    width: "auto",
                                                                    height: "auto",
                                                                }}
                                                                alt="User"
                                                                className="overflow-hidden"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col justify-between px-3 py-0">
                                                            <span>
                                                                <a href="member_profile.php" className="member_name">Andrew Cramer</a>
                                                                <p>Broker Account</p>
                                                                <span className="email_content">andrewcramer@gmail.com</span>
                                                            </span>
                                                           
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="member_status_badge">Active</span>
                                                    </div>
                                                </div>

                                                <div className="flex py-4 member_deals_stats justify-center gap-4">
                                                    <div className="active_deals deals_stats">
                                                        <small>Active Details</small>
                                                        <h6 className="deal_count">175k</h6>
                                                    </div>
                                                    <div className="average_deals deals_stats">
                                                        <small>Average Details</small>
                                                        <h6 className="deal_count">32k</h6>
                                                    </div>
                                                    <div className="active_listing deals_stats">
                                                        <small>Active Listings</small>
                                                        <h6 className="deal_count">19</h6>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
        </>
    )
}