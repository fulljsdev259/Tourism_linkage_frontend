
import React from 'react';

//import { DateField,DatePicker } from 'react-date-picker'
//import 'react-date-picker/index.css'

//import Latex from 'react-latex';
import { input } from 'react-dom'
import styled from 'styled-components';

// import Globalize from 'globalize';
// import globalizeLocal from 'react-widgets-globalize';
//import Datetime from 'react-datetime';

//import 'react-datetime/css/react-datetime.css'

//  import moment from 'moment'
// import momentLocaliser from 'react-widgets-moment';


// import DateTimePicker from 'react-widgets/lib/DateTimePicker'

//import './reactWidgetStyle.css'


//  moment.locale('en');
//  momentLocaliser()
// import './reactWidgetStyle.css'

// Moment.locale('en');
// momentLocaliser()
//Globalize.dateFormatter({ raw: 'MMM dd, yyyy' })
//globalizeLocal();
//import Datetime from  'react-datetime';

//var date = new Date();
export const Input = styled.input`
  font-size: 1em;
  width:14rem;
  padding: 0.3em;
  margin: 0.2em;
  background: #ffffff;
  border: 1px solid grey;
  border-radius: 3px;
  text-align:center;
  &::placeholder{
    font-size:.8em;
  };

  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;


export const Input1 = styled.input`
  font-size: 1em;
  width:9rem;
  padding: 0.5em;
  margin: 0.2em .5em;
  
  background: #ffffff;
  border: 1px solid grey;
  border-radius: 3px;
  text-align:center;
  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;





export const Checkbox = styled.input`
  font-size: 1em;
  width:1.2rem;
  height:1.2rem;
  padding: 0.5em;
  margin: .8rem 0 .8rem .8rem;
  color: palevioletred;
  background: #ffffff;
  border: 1px solid grey;
  border-radius: 3px;
  text-align:center;

  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;

export const Radio = styled.input`

  width:1.1rem;
  height:1.1rem;
  padding: 0.5em;

  color: palevioletred;
  background: #ffffff;
  border: 1px solid grey;
  border-radius: 8px;
  text-align:center;

  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;


export const Select = styled.select`
font-size: 1em;

  padding: 0.5em ;
  margin: 0.2em .5em;
  color: grey;
  background: #ffffff;
  border: 1px solid grey;
  border-radius: 3px;
  text-align:center;

`

export const renderField = ( { input, label, type, meta: { touched, error } } ) => (
    <div style={ { display: 'flex', flexDirection: 'column' } }>
        <Input { ...input } placeholder={ label } type={ type } />

        <span style={ { color: 'red', texAlign: 'center' } }>{ touched && error && <span>{ error }</span> }</span>
    </div>
)


export const renderFieldTextArea = ( { input, label, type, meta: { touched, error } } ) => (
    <div style={ { display: 'flex', flexDirection: 'column', width: '100%', } }>
        <textarea style={ { width: '100%', height: 100 } } { ...input } placeholder={ label } type={ type } />

        <span style={ { color: 'red', texAlign: 'center' } }>{ touched && error && <span>{ error }</span> }</span>
    </div>
)

export const renderSelectBox = ( { input, label, type, data, title, meta: { touched, error } } ) => (
    <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
        <Select { ...input } >
            <option value="" disabled="disabled">Select { title }</option>
            { data.map( ( data, i ) => {
                return <option key={ i } value={ data }>{ data }</option>

            } )

            }
        </Select>
        <span style={ { color: '#e74c3c', fontSize: 12, paddingLeft: 8 } }><strong>{ touched && error && <span ><sup style={ { fontSize: 8 } }>* </sup> { error }</span> }</strong></span>
    </div>
)



export const renderCheckboxField = ( { input, label, type, meta: { touched, error } } ) => (
    <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
        <Checkbox { ...input } placeholder={ label } type={ type } name="answer" />
        <span style={ { color: 'red', texAlign: 'center' } }>{ touched && error && <span>{ error }</span> }</span>
    </div>
)


export const renderRadioField = ( { input, label, type, meta: { touched, error } } ) => (
    <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
        <input { ...input } type={ type } name="answer" />
        <span style={ { color: 'red', texAlign: 'center' } }>{ touched && error && <span>{ error }</span> }</span>
    </div>
)

/*export  class  renderFieldDateTime extends React.Component{
constructor(){
  super();
  this.state={open:true,showDatePicker: false, datePickerHack: 0}
}

render(){
  const { input: { onChange, value }, showTime ,label,type, meta: { touched, error } }=this.props;

 return ( <div style={{display:'flex',flexDirection:'column',flex:1}}>
      <Datetime
      dateFormat="DD/MM/YYYY "

      locale="en"
      closeOnSelect={true}
         onChange={(val)=>{
            onChange(val.toISOString())
       }}

       inputProps={{ref: (input) => {this.input = input;}}}

       value={!value ? new Date() : new Date(value)}
   />
       <span style={{color:'red',texAlign:'center'}}>{touched && error && <span>{error}</span>}</span>
 </div>
 )
 }
}





export const renderFieldAddQuestion = ({ input, label,type, meta: { touched, error } }) => (
 <div style={{display:'flex',flexDirection:'column'}}>
      <Input1 {...input} placeholder={label} type={type}/>
      <span style={{color:'red'}}>{touched && error && <span>{error}</span>}</span>
</div>
)




  //   <DateField
  //     {...input}

  //   defaultValue={"2016-05-30 15:23:34"}
  //   dateFormat="YYYY-MM-DD HH:mm:ss"
  //       >
  //       <DatePicker
  //   navigation={true}
  //   locale="en"
  //   forceValidDate={true}
  //   highlightWeekends={true}
  //   highlightToday={true}
  //   weekNumbers={true}
  //   weekStartDay={0}
  // />
  //   </DateField>*/