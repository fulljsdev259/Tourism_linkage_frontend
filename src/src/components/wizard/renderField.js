import React from 'react'
import './index.scss';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import './antdCustom.scss';

const Option = Select.Option;

export const renderField = ( { input, label, type, meta: { touched, error } } ) => (
    <div className="renderField">
        <label>{ label }</label>
        <div>
            <input { ...input } placeholder={ label } type={ type } className="input" />
            { touched && error && <span><sup>*</sup>{ error }</span> }
        </div>
    </div>
)



export const renderSelect = ( { input, label, type, meta: { touched, error } } ) => (
    <div className="renderSelect">
        <label>{ label }</label>
        <Select { ...input } defaultValue="lucy" style={ { width: 120 } } onChange={ ( data ) => console.log( data ) }>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
        </Select>

        <div>

            { touched && error && <span><sup>*</sup>{ error }</span> }
        </div>
    </div>
)



export const renderTag = ( { input, label, type, meta: { touched, error } } ) => {
    const children = [];
    for ( let i = 10; i < 36; i++ ) {
        children.push( <Option key={ i.toString( 36 ) + i }>{ i.toString( 36 ) + i }</Option> );
    }

    return <div className="renderSelect">
        <label>{ label }</label>
        <div style={ { ddisplay: 'flex', marginTop: 10 } }>
            <Select
                mode="tags"
                style={ { width: '100%' } }
                placeholder="Please select"
                defaultValue={ ['a10', 'c12'] }
                onChange={ () => console.log() }
            >
                { children }
            </Select>
            <div>
                { touched && error && <span><sup>*</sup>{ error }</span> }
            </div>
        </div>
    </div>
}





