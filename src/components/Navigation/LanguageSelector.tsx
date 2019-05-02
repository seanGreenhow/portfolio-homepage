import * as React from "react"
import { withLocalize, LocalizeContextProps } from "react-localize-redux"
import { MdSettings } from "react-icons/md"

class LanguageSelector extends React.Component<LocalizeContextProps, { open: boolean }> {
    state = { open: false }

    render() {
        return (
            <div id="languageSelection">
                <button type="button" onClick={() => {
                    this.setState({ open: !this.state.open })
                }}><MdSettings size={26} /></button>

                {this.state.open &&
                    <div className="selector">
                        {this.props.languages.map(lang => {
                            return (
                                <button type="button" key={lang.code}
                                    className={`language ${this.props.activeLanguage.code == lang.code ? "active" : ""}`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        this.props.setActiveLanguage(lang.code)
                                        this.setState({ open: false })
                                    }}
                                >
                                    {lang.name}
                                </button>
                            )
                        })}
                    </div>
                }
            </div>

        )
    }
}

export default withLocalize(LanguageSelector)