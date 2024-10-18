import styled from 'styled-components'
import { Search } from '../Search'
import { Element } from '../Element'

const StyledLayout = styled.div`
    width: 500px;
    height: 400px;
    background-color: ${({ theme }) => theme.background.paper};
    box-shadow: 5px 5px 5px #33333310;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    .content {
        flex: 1;
        overflow: auto;
        .download-element + .download-element {
            border-top: 1px solid ${({ theme }) => theme.border.main};
        }
    }

    header {
        background-color: ${({ theme }) => theme.background.neutral};
        border-radius: 8px 8px 0 0;
        padding: 12px;
        position: relative;
    }
    .buttons {
        display: flex;
        gap: 8px;
    }
    .button {
        width: 12px;
        height: 12px;
        background-color: red;
        border-radius: 100%;
    }
    .title {
        position: absolute;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({ theme }) => theme.text.secondary};
        user-select: none;
    }
    footer {
        padding: 12px 21px;
        border-top: 2px solid ${({ theme }) => theme.border.main};
        display: flex;
        justify-content: space-between;
        .tools {
            display: flex;
            gap: 10px;
        }
        button {
            background-color: transparent;
            border: none;
            font-size: 25px;
            color: ${({ theme }) => theme.text.icon};
            cursor: pointer;
            i {
                transition: 300ms color;
            }
            :hover {
                color: ${({ theme }) => theme.text.hint};
            }
        }
    }
`

export const Layout = () => {
    return (
        <StyledLayout>
            <header>
                <div className="buttons">
                    <div
                        className="button"
                        style={{ backgroundColor: '#FF6567' }}
                    ></div>
                    <div
                        className="button"
                        style={{ backgroundColor: '#FED85B' }}
                    ></div>
                    <div
                        className="button"
                        style={{ backgroundColor: '#32E31B' }}
                    ></div>
                </div>
                <div className="title">Download Manager</div>
            </header>
            <div className="content">
                <Element />
                <Element />
                <Element />
                <Element />
                <Element />
                <Element />
                <Element />
                <Element />
                <Element />
                <Element />
                <Element />
            </div>
            <footer>
                <Search />
                <div className="tools">
                    <button>
                        <i className="ri-delete-bin-6-line"></i>
                    </button>
                    <button>
                        <i className="ri-settings-2-line"></i>
                    </button>
                </div>
            </footer>
        </StyledLayout>
    )
}
