import Profile from "./Profile"
import {Profile as ProfileType} from "./ProfileInterface.ts";
import {Box, Grid} from "@chakra-ui/react"
import {lastNameFilter} from "./filters/filter.js"
import {Pagination, usePagination} from "./hooks/usePagination.jsx"
import {useEffect} from "react";

const ProfileList = ({ data,  activeLetter } : {data: Array<ProfileType>,  activeLetter: string}) => {
    const [paginationProps, createPagination, setPage] = usePagination()
    
    useEffect(()=>{
        setPage(0);
    }, [data]);

    const filteredData = data.filter(lastNameFilter(activeLetter));
    const paginatedData: Array<ProfileType> = createPagination(filteredData)

    return (
        <>
            <Grid templateColumns={["1fr", " 1fr 1fr", "1fr 1fr 1fr"]} gap={6}>
                {paginatedData?.map(d => {
                    return <Profile detail={d} key={`${d.id}`}  />
                })}
                {paginatedData?.length === 0 && <>Nothing matched your search</>}
            </Grid>
            <Box my={"20px"} display={"flex"} justifyContent={"flex-end"}>
                <Pagination {...paginationProps} data={filteredData} />
            </Box>
        </>
    )
}

export default ProfileList
