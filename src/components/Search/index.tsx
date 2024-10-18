import styled from 'styled-components'

const StyledSearch = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.background.paleNeutral};
    padding: 0 10px;
    gap: 5px;
    border-radius: 4px;
    width: 180px;

    input {
        border: none;
        outline: none;
        background-color: transparent;
        color: ${({ theme }) => theme.text.main};
        appearance: none;
    }
    input::placeholder,
    .icon {
        color: ${({ theme }) => theme.text.neutral};
    }
    .icon {
        font-size: 20px;
    }
`

export const Search = () => {
    return (
        <StyledSearch>
            <i className="icon ri-search-line"></i>
            <input type="search" placeholder="Search" />
        </StyledSearch>
    )
}
