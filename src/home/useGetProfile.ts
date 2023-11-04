import Axios from "../common/axios";
import { useEffect, useState } from "react";
import { ProfileResponse } from "./domain";

const defaultProfile = {loading: true, error: '', data: undefined};

interface GetProfile {
    loading: boolean;
    error: string;
    data?: ProfileResponse
}

const useGetProfile = (profileId: number) => {
    const [profile, setProfile] = useState<GetProfile>(defaultProfile)

    useEffect(() => {
        setProfile(defaultProfile);
        (async function() {
            try {
                const { data } =  await Axios.get("/profile");

                setProfile({data, error: '', loading: false});
            } catch(err) {
                setProfile({loading: false, error: 'Soemthing went wrong', data: undefined})
            }
        })();

    }, [profileId]);

    return profile
}

export default useGetProfile;