import styled from 'styled-components'

const StyledElement = styled.div`
    padding: 15px;
    display: flex;
    align-items: center;

    .element-content {
        flex: 1;
    }

    .type-icon {
        margin-right: 15px;
        width: 60px;
        height: 60px;
        background-color: ${({ theme }) => theme.background.paleNeutral};
        border-radius: 6px;
        .short {
            height: 70%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 29px;
            font-weight: 500;
            color: ${({ theme }) => theme.background.primary};
        }
        .full {
            height: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${({ theme }) => theme.background.primary};
            color: #fff;
        }
    }

    .element-content {
        .header {
            display: flex;
            justify-content: space-between;
            .name {
                color: ${({ theme }) => theme.text.main};
            }
            .percent {
                color: ${({ theme }) => theme.text.hint};
            }
        }
        .progress {
            background-color: ${({ theme }) => theme.background.neutral};
            height: 3px;
            border-radius: 3px;
            margin: 6px 0;
            .bar {
                height: 100%;
                border-radius: 3px;
                background-color: ${({ theme }) => theme.background.primary};
            }
        }
        .footer {
            display: flex;
            font-size: 14px;
            gap: 14px;
            color: ${({ theme }) => theme.text.hint};
        }
    }
    .actions {
        padding-left: 15px;
        .cancel {
            width: 30px;
            height: 30px;
            background: transparent;
            border: none;
            color: ${({ theme }) => theme.text.secondary};
            font-size: 18px;
            i {
                transition: 300ms color;
            }
            :hover {
                color: ${({ theme }) => theme.text.main};
            }
            cursor: pointer;
        }
    }
`

export const Element = () => {
    return (
        <StyledElement className="download-element">
            <div className="type-icon">
                <div className="short">Ps</div>
                <div className="full">PSD</div>
            </div>
            <div className="element-content">
                <div className="header">
                    <div className="name">iOS9 UI Kit.psd</div>
                    <div className="percent">32%</div>
                </div>
                <div className="progress">
                    <div className="bar" style={{ width: '32%' }}></div>
                </div>
                <div className="footer">
                    <div className="speed">1.28 MB/s</div>
                    <div className="size">77.2MB</div>
                </div>
            </div>
            <div className="actions">
                <button className="cancel">
                    <i className="ri-close-line"></i>
                </button>
            </div>
        </StyledElement>
    )
}
