import React, {useState} from "react"
import {Box, Input,Button, InputGroup, InputRightAddon} from "@chakra-ui/react"
import {Search2Icon} from "@chakra-ui/icons"

export const useSearch = () => {
    const [inputSearch, setInputSearch] = useState("")
    const [activeInputSearch, setActiveInputSearch] = useState("")


    const searchProps = {
        inputProps: {
            onChange: (e: React.ChangeEvent<HTMLInputElement>  ) => {
                setInputSearch(e.currentTarget.value)
            },
            // onKeyPress: (e:  React.KeyboardEvent<HTMLDivElement> ) => {
            //    if(e.key=== "Enter"){  setActiveInputSearch(inputSearch) }
            // },
            value: inputSearch,
        },
        buttonProps: {
            onClick: () => {
                setActiveInputSearch(inputSearch)
                //callback()
            },
            cursor: "pointer",
        },
        onSubmit: (e)=> {
            e.preventDefault();
            setActiveInputSearch(inputSearch)
        }
    }

    const reset = () => {
        setActiveInputSearch("")
        setInputSearch("")
    }

    return [searchProps, activeInputSearch, reset] as const
}


export const Search = ({ inputProps, buttonProps, onSubmit }: {inputProps: object, buttonProps: object}) => {
    return (
        <Box key={"searchInput"}>

            <form onSubmit={onSubmit}>
            <InputGroup borderColor={"purple"}>
                <Input type={"text"} name={"search"} placeholder={"Search"} {...inputProps} borderRadius={"0px"} />
                <InputRightAddon {...buttonProps} padding={"0px"} backgroundColor={"purple"} borderRadius={"0px"}>
                    <Button type={"submit"} backgroundColor={"purple"} padding={"20px"}  borderRadius={"0px"}>
                        <Search2Icon color={"white"} />
                    </Button>
                </InputRightAddon>
            </InputGroup>
            </form>
        </Box>
    )
}
