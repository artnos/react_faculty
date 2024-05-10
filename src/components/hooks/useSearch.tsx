import React, {useState} from "react"
import {Box, Input, InputGroup, InputRightAddon} from "@chakra-ui/react"
import {Search2Icon} from "@chakra-ui/icons"

export const useSearch = () => {
    const [inputSearch, setInputSearch] = useState("")
    const [activeInputSearch, setActiveInputSearch] = useState("")

    const searchProps = {
        inputProps: {
            onChange: (e: React.ChangeEvent ) => {
                setInputSearch(e.currentTarget.value)
            },
            onKeyPress: (e:  React.KeyboardEvent<HTMLDivElement> ) => {
               if(e.key=== "Enter"){  setActiveInputSearch(inputSearch) }
            },
            value: inputSearch,
        },
        buttonProps: {
            onClick: () => {
                setActiveInputSearch(inputSearch)
                //callback()
            },
            cursor: "pointer",
        },
    }

    const reset = () => {
        setActiveInputSearch("")
        setInputSearch("")
    }

    return [searchProps, activeInputSearch, reset] as const
}


export const Search = ({ inputProps, buttonProps }: {inputProps: object, buttonProps: object}) => {
    return (
        <Box key={"searchInput"}>
            <InputGroup borderColor={"purple"}>
                <Input type={"text"} name={"search"} placeholder={"Search"} {...inputProps} borderRadius={"0px"} />
                <InputRightAddon {...buttonProps} backgroundColor={"purple"} borderRadius={"0px"}>
                    <Search2Icon color={"white"} />
                </InputRightAddon>
            </InputGroup>
        </Box>
    )
}
