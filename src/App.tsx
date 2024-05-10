import ProfileList from "./components/ProfileList"

import { Container, Box, Heading, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSelectABC, SelectorABC } from "./components/hooks/useSelectABC.tsx"
import { Search, useSearch } from "./components/hooks/useSearch.tsx"
import { SelectCountry, useSelectCountry } from "./components/hooks/useSelectCountry.tsx"
import useSelectRegion from "./components/hooks/useSelectRegion.tsx"
import { countryFilter, regionFilter, searchFilter } from "./components/filters/filter.ts"
import {Profile} from "./components/ProfileInterface.ts";

//have to implement search
//reset region
export default function Faculty() {
    const [allProfiles, setAllProfiles] = useState<Profile[]>([])
    const [SelectRegion, activeRegion] = useSelectRegion()
    const [searchProps, activeInputSearch, resetActiveInput] = useSearch()
    const [abcProps, activeLetter, resetLetter] = useSelectABC()
    const [countryProps, activeCountry, resetCountry] = useSelectCountry()

    const getData = async () => {
        const response = await fetch("https://artsir.com/faculty")
        const result = await response.json()
        setAllProfiles(result)

    }

    const filters = [regionFilter(activeRegion), searchFilter(activeInputSearch)]
    if (activeInputSearch === "") {
        filters.push(countryFilter(activeCountry))
    }
    const filteredProfiles = allProfiles.filter(profile => filters.every(f => f(profile)))


    useEffect(() => {
        getData()
    }, [])

    /*I need these useEffect because i need to reset the dropdown when other dropdown changes.
    For example when they search i want to reset the country to no specifc country
    * */
    useEffect(() => {
        resetCountry()
    }, [activeRegion])

    // useEffect(() => {
    //     resetCountry()
    //     resetLetter()
    // }, [activeInputSearch])

    useEffect(() => {
        resetActiveInput()
        resetLetter()
    }, [activeCountry])


    //console.log("State Review", { activeRegion, activeInputSearch, activeCountry, activeLetter })

    return (
        <Box>
            <Container maxW="1200px">
                <Heading color={"purple"} mt={"30px"}>
                    Faculty
                </Heading>
                <Flex gap={"20px"} mt={"20px"} flexWrap={"wrap"} justifyContent={"space-between"}>
                    <Box flex={"1 1 50%"}>
                        <SelectRegion />
                    </Box>
                    <Box flex={"1 1 23%"} minW={"200px"}>
                        <Search {...searchProps} reset={[resetCountry, resetLetter]} />
                    </Box>
                    <Box>
                        <SelectCountry {...countryProps} data={allProfiles} />
                    </Box>
                </Flex>
                <Box mt={"10px"}>
                    {/*Filter By Country*/}
                    {activeInputSearch != "" ? (
                        "Search By: " + activeInputSearch
                    ) : (
                        <>
                            {activeCountry === "" && <>{activeRegion}</>}
                            {activeRegion && activeCountry == null ? activeRegion + " Faculty" : ""}
                            {activeCountry && activeCountry}
                            {activeLetter ? " > " + activeLetter.toUpperCase() : ""}
                        </>
                    )}
                </Box>
                <Flex justifyContent={"center"} my={"20px"}>
                    <SelectorABC
                        {...abcProps}
                        filterLetters={activeCountry === "" ? false : true}
                        data={filteredProfiles}
                    />
                </Flex>

                {allProfiles.length == 0 ? (
                    <>Loading...</>
                ) : (
                    <ProfileList data={filteredProfiles}  activeLetter={activeLetter} />
                )}

                {/*{faculty_id !== null ? <Modal faculty_id={faculty_id} closeModal={closeModal}/> : ''}*/}
            </Container>
        </Box>
    )
}
