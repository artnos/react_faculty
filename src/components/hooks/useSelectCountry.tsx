import {Box, Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import {useMemo, useState} from "react"
import {ChevronDownIcon} from "@chakra-ui/icons"
import {Profile} from "../ProfileInterface.ts";

export const useSelectCountry = () => {
    const [activeCountry, setActiveCountry] = useState("")

    const countryProps = {
        activeCountry,
        setActiveCountry,
    }

    const reset = () => {
        setActiveCountry("")
    }

    return [countryProps, activeCountry, reset] as const
}

export const SelectCountry = ({ data, activeCountry, setActiveCountry }: {
    data: Profile[], activeCountry:string, setActiveCountry: (s:string)=>void
}) => {

    const countries = useMemo(()=>{
        return data.reduce((acc: Array<string>, cur : Profile) : Array<string>  => {
                if (acc.includes(cur.country.trim())) {
                    return acc
                } else {
                    return [...acc, cur.country.trim()]
                }
            }, [])
            .sort()
    }, [data])


    return (
        <Box>
            <Menu>
                <MenuButton
                    rightIcon={<ChevronDownIcon />}
                    as={Button}
                    backgroundColor={"purple"}
                    border={"solid 1px #511c74"}
                    borderRadius={"0px"}
                    color={"white"}
                    _expanded={{ bg: "purple" }}
                    _focus={{ bg: "purple" }}
                    width={"222px"}
                    _hover={{
                        backgroundColor: "white",
                        color: "purple",
                    }}
                    // onClick={() => setOpen(!open)}
                >{`Filter by Country`}</MenuButton>

                    <MenuList
                        // position={"absolute"}
                        // backgroundColor={"white"}
                        // border={"solid 1px"}
                        // borderColor={"purple"}

                        right={"0px"}
                        // pt={"10px"}
                        height={"50vh"}
                        overflow={"hidden"}
                        overflowY={"auto"}
                        pt={"10px"}
                        mt={"0px"}
                        width={"200px"}
                        sx={{ width: "200px" }}
                    >
                        {countries.map(country => {
                            return (
                                <MenuItem
                                    cursor={"pointer"}
                                    fontWeight={activeCountry === country? "bold": "normal"}

                                    _hover={{
                                        fontWeight: "bold",
                                    }}
                                    onClick={() => setActiveCountry(country)}
                                    key={country}
                                >
                                    {country}
                                </MenuItem>
                            )
                        })}
                    </MenuList>

            </Menu>
        </Box>
    )
}
