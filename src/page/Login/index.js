import React from 'react'
import { CheckBox, Header, Input } from '../../components'
import './styles.css'

const Login = () => {
    return (
        <div>
            <Header />
            <form className="page" method="post" enctype="multipart/form-data">
                <span className="title">Create new account</span>
                <div className="gap">
                    <span className="label">Title</span>
                    <div className="inline pr-1">
                        <CheckBox label="Mrs"/>
                    </div>
                    <div className="inline pr-1">
                        <CheckBox label="Ms"/>
                    </div>
                    <div className="inline pr-1">
                        <CheckBox label="Mdm"/>
                    </div>
                    <div className="inline pr-1">
                        <CheckBox label="Mr"/>
                    </div>
                    <div className="inline pr-1">
                        <CheckBox label="Dr"/>
                    </div>
                </div>
                <div className="gap">
                    <div className="input-inline pr-1">
                        <Input title="Last name " placeholder="Last name" />
                    </div>
                    <div className="input-inline pl-1">
                        <Input title="Firs name " placeholder="Firs name" />
                    </div>
                </div>

            </form>
        </div>
    )
}
export default Login