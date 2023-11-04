import { useEffect, useState } from "react";
import { LinkResponse } from "./domain";
import Axios from "../../common/axios";

const defaultProfile = {loading: true, error: '', data: undefined};

interface GetLinks {
    loading: boolean;
    error: string;
    data?: LinkResponse[]
}

const useGetLinks = (profileId: number) => {
    const [links, setLinks] = useState<GetLinks>(defaultProfile)

    useEffect(() => {
        setLinks(defaultProfile);
        (async function() {
            try {
                const { data } =  await Axios.get("/contact/links");

                setLinks({data, error: '', loading: false});
            } catch(err) {
                setLinks({loading: false, error: 'Something went wrong', data: undefined})
            }
        })();

    }, [profileId]);

    return links
}

export default useGetLinks;