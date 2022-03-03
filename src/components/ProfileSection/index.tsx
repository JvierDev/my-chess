import { Avatar } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { FetchProfileState, Profile } from "../../stores/ducks/profile/types";

const ProfileSection = () => {
    const profileData = useSelector<FetchProfileState, Profile>(
        (state) => state.profile.profile
    );

    useEffect(() => {
        console.log(profileData);
    }, [profileData]);

    return (
        <div>
            <Avatar src={profileData.avatar} alt="User Avatar" />
            <label>{profileData.username}</label>
            <label>{profileData.name}</label>
            <label>{profileData.avatar}</label>
            <label>{profileData.followers}</label>
            <label>{profileData.joined}</label>
            <label>{profileData.stats?.chess_blitz.record.win}</label>
            <label>{profileData.stats?.chess_blitz.record.draw}</label>
            <label>{profileData.stats?.chess_blitz.record.loss}</label>
            <label>{profileData.stats?.chess_rapid.record.win}</label>
            <label>{profileData.stats?.chess_rapid.record.draw}</label>
            <label>{profileData.stats?.chess_rapid.record.loss}</label>
        </div>
    );
};

export default ProfileSection;
