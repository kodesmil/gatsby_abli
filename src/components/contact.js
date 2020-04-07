import React from "react";
import {Box, Button, Input, Styled} from "theme-ui";


export class Contact extends React.Component {
    render() {
        return (
            <Box
                anchor={this.props.isClinic ? "clinic" : "contact" }
                sx={{
                    paddingTop: ["4em", "4em", "8em", "8em"],
                    width: ["80%", "60%", "50%", "40%"],
                    mx: "auto"
                }}
                id={this.props.isClinic ? "clinic" : "contact" }
                as="form"
                method="post"
                name={this.props.isClinic ? "clinic" : "contact" }
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value={this.props.isClinic ? "clinic" : "contact" }/>
                <Styled.h3 style={{textAlign: "center", fontWeight: "900"}}>
                    {this.props.heading}
                </Styled.h3>
                <Styled.p style={{textAlign: "center", marginTop: "0.5em"}}>
                    {this.props.description}
                </Styled.p>
                <Box sx={{width: ["90%", "65%", "50%", "35%"], mx: "auto", maxWidth: "250px"}} mt='2em'>
                    <Input style={{background: "white"}} placeholder="Name" name="name" mb={3}/>
                    <Input style={{background: "white"}} placeholder="Email" type="email" name="email" mb={3}/>
                    {this.props.isClinic &&
                        <Input style={{background: "white"}} placeholder="Clinic" name="clinic" mb={3}/>
                    }
                </Box>
                <Button type="submit" sx={{marginTop: "1em", mx: "auto", display: "block"}} mt='2em'>
                    {this.props.button}
                </Button>

                <Styled.p style={{textAlign: "center", marginTop: "24px"}}>
                    or use
                </Styled.p>
                <Styled.a
                    style={{
                        textAlign: "center",
                        display: "block",
                        marginRight: "auto",
                        marginLeft: "auto",
                        marginTop: "16px",
                    }}
                    href="mailto:hello@abli.io?subject=Tell me more about Abli Health"
                >
                    hello@abli.io
                </Styled.a>
            </Box>
        )
    }
}