import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { Rating } from 'primereact/rating';
import { ColorPicker } from 'primereact/colorpicker';
import { Knob } from 'primereact/knob';




    const FormLayoutDemo = () => {
        const [countries, setCountries] = useState([]);
        const [filteredCountries, setFilteredCountries] = useState(null);
        const [value1, setValue1] = useState('');
        const [value2, setValue2] = useState(null);
        const [value3, setValue3] = useState('');
        const [value4, setValue4] = useState('');
        const [value5, setValue5] = useState('');
        const [value6, setValue6] = useState([]);
        const [value7, setValue7] = useState('');
        const [value8, setValue8] = useState(null);
        const [value9, setValue9] = useState('');
        const [value10, setValue10] = useState(null);
        const [value11, setValue11] = useState(null);
        const [value12, setValue12] = useState('');
    const [floatValue, setFloatValue] = useState('');
    const [autoValue, setAutoValue] = useState<Demo.Country[]>([]);
    const [selectedAutoValue, setSelectedAutoValue] = useState(null);
    const [autoFilteredValue, setAutoFilteredValue] = useState<Demo.Country[]>([]);
    const [calendarValue, setCalendarValue] = useState(new Date());
    const [inputNumberValue, setInputNumberValue] = useState<number | null>(null);
    const [chipsValue, setChipsValue] = useState<any[]>([]);
    const [sliderValue, setSliderValue] = useState<number | string>(10);
    const [ratingValue, setRatingValue] = useState<number | undefined>(undefined);
    const [colorValue, setColorValue] = useState('1976D2');
    const [knobValue, setKnobValue] = useState(90);
    const [radioValue, setRadioValue] = useState(null);
    const [checkboxValue, setCheckboxValue] = useState<string[]>([]);
    const [switchValue, setSwitchValue] = useState(false);
    const [listboxValue, setListboxValue] = useState(null);
    const [dropdownValue, setDropdownValue] = useState(null);
    const [multiselectValue, setMultiselectValue] = useState(null);
    const [toggleValue, setToggleValue] = useState(false);
    const [selectButtonValue1, setSelectButtonValue1] = useState(null);
    const [selectButtonValue2, setSelectButtonValue2] = useState(null);
    const [inputGroupValue, setInputGroupValue] = useState(false);
    const [selectedNode, setSelectedNode] = useState<TreeSelectSelectionKeysType | null>(null);
    const [treeSelectNodes, setTreeSelectNodes] = useState<TreeNode[]>([]);

      
    const [dropdownItem, setDropdownItem] = useState(null);
    const dropdownItems = [
        { name: 'CC', code: 'CC' },
        { name: 'CE', code: 'CE' },
        { name: 'TI', code: 'TI' },
        { name: 'PA', code: 'PA' }
    ];


    const [dropdownItem1, setDropdownItem1] = useState(null);
    const dropdownItems1 = [
        { name: 'F', code: 'F' },
        { name: 'M', code: 'M' },
   
    ];

       const [dropdownItem2, setDropdownItem2] = useState(null);
    const dropdownItems2 = [
        { name: 'Si', code: 'Si' },
        { name: 'No', code: 'No' },
        
    ];

     const [dropdownItem3, setDropdownItem3] = useState(null);
    const dropdownItems3 = [
        { name: 'Casado', code: 'Casado' },
        { name: 'Union Libre', code: 'Union Libre' },
        
    ];  



     const cities = [
        { name: 'Colombia', code: 'Colombia' },
        { name: 'Venezuela', code: 'Venezuela' },
       
    ];

     const Comercial = [
        { name: 'avier Garcia', code: 'Javier' },
        { name: 'gabriel', code: 'Gabriel' },
       
    ];
 const profesional = [
        { name: 'lida', code: 'lida' },
        { name: 'marcela', code: 'Marcela' },
       
    ];


     const departa = [
        { name: 'Cundinamarca', code: 'Cundinamarca' },
        { name: 'Bogota', code: 'Bogota' },
       
    ];

    const Municipio = [
         { name: 'Bogota DC', code: 'Bogota DC' },
        { name: 'Viani', code: 'Viani' },
       
       
    ];
        
        
    const zona = [
        { name: 'Rural', code: 'Rural' },
        { name: 'Urbano', code: 'Urbano' },
       
    ];
        

    const tipo_usuario = [
        { name: 'contributivo', code: 'contributivo' },
        { name: 'subsidiado', code: 'Subsidiado' },
       
    ];
        
    
    
   
    
   
    

    return (
        <div className="grid">
            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h5>Paciente DHI</h5>

                     <div className="field">
                            <label htmlFor="tipo_id">Tipo Doc</label>
                            <Dropdown id="tipo_id" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                     </div>  
                    <div className="field">
                        <label htmlFor="identificacion1">Identificación</label>
                        <InputText id="identificacion1" type="text" />
                    </div>
                     
                   

                     <div className="field">
                         <label htmlFor="expdoc">Fecha Expedición Documento</label>
                    <span className="p-float-label">
                        <label htmlFor="calendar">Fecha</label>
                        <label htmlFor="expdoc">Fecha de Expedición documento</label>
                        <Calendar inputId="calendar" value={value5} onChange={(a) => setValue5(a.expdoc)}></Calendar>
                        
                    </span>
                </div>

                <div className="field">
                    <label htmlFor="lugexpdoc">Lugar Expedición Documento</label>
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={Municipio} value={value4} onChange={(e) => setValue4(e.value)} optionLabel="name"></Dropdown>
                        
                    </span>
                </div>  

                  <div className="field">
                         <label htmlFor="fechnaci">Fecha Nacimiento</label>
                    <span className="p-float-label">
                        
                        <label htmlFor="fechnaci">Fecha de Nacimiento</label>
                        <Calendar inputId="calendar" value={value6} onChange={(e) => setValue6(e.value)}></Calendar>
                    </span>
                </div>
         
                   
                    <div className="field">
                        <label htmlFor="name1">Nombres</label>
                        <InputText id="name1" type="text" />
                    </div>
                     <div className="field">
                        <label htmlFor="name2">Apellidos</label>
                        <InputText id="name2" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="edad">Edad</label>
                        <InputText id="edad" type="text" />
                    </div>


                    <div className="field">
                            <label htmlFor="sexo">sexo</label>
                            <Dropdown id="sexo" value={dropdownItem1} onChange={(e) => setDropdownItem1(e.value)} options={dropdownItems1} optionLabel="name" placeholder="Select One"></Dropdown>
                     </div>  

                     <div className="field">
                            <label htmlFor="sexo">Extranejero</label>
                            <Dropdown id="sexo" value={dropdownItem2} onChange={(e) => setDropdownItem2(e.value)} options={dropdownItems2} optionLabel="name" placeholder="Select One"></Dropdown>
                     </div>  

                   
                    <div className="field">
                            <label htmlFor="estado_civil">Estado Civil</label>
                            <Dropdown id="estado_civil" value={dropdownItem3} onChange={(e) => setDropdownItem3(e.value)} options={dropdownItems3} optionLabel="name" placeholder="Select One"></Dropdown>
                     </div>  
                      <div className="field">
                        <label htmlFor="ocupacion">Ocupación</label>
                        <InputText id="ocupacion1" type="text" />
                    </div>

                </div>




                <div className="card p-fluid">   
                <h6>Ubicación</h6>
                    <div className="formgrid grid">
                      
                        <div className="field col">   
                        </div>


                   <div className="field col">
                    <span className="p-float-label">
                        <Dropdown id="multiselect" options={cities} value={value9} onChange={(e) => setValue9(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="multiselect">Pais</label>
                    </span>
                </div>

                 <div className="field col">
                    <span className="p-float-label">
                        <Dropdown id="depart" options={departa} value={value10} onChange={(e) => setValue10(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="depart">Departamento</label>
                    </span>
                </div>
                
                <div className="field col">
                    <span className="p-float-label">
                        <Dropdown id="municipio" options={Municipio} value={value11} onChange={(e) => setValue11(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="municipio">Municipio</label>
                    </span>
                  </div>

                 <div className="field col">
                    <span className="p-float-label">
                        <Dropdown id="zona" options={zona} value={value12} onChange={(e) => setValue12(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="zona">Zona</label>
                    </span>
                     </div>
                    </div>

                    <div className="field col">
                        <label htmlFor="direccion">Dirección</label>
                        <InputText id="direccion" type="text" />
                    </div>
                 


                </div>
            </div>




            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h5>Comunicación</h5>
                    <div className="field grid">
                        <label htmlFor="name3" className="col-12 mb-2 md:col-2 md:mb-0">
                            Telefono 1
                        </label>
                        <div className="col-12 md:col-10">
                            <InputText id="name3" type="text" />
                        </div>
                    </div>
                    <div className="field grid">
                        <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                            Telefono 2
                        </label>
                        <div className="col-12 md:col-10">
                            <InputText id="email3" type="text" />
                        </div>
                    </div>

                     <div className="field grid">
                        <label htmlFor="email4" className="col-12 mb-2 md:col-2 md:mb-0">
                            Correo
                        </label>
                        <div className="col-12 md:col-10">
                            <InputText id="email4" type="text" />
                        </div>
                    </div>
                </div>

                

                <div className="card">
                    <h5>Asegurador y Regimen</h5>
                    
                   <div className="field p-fluid">
                    <label htmlFor="multiselect">Asegurador</label>
                    <span className="p-float-label">
                        <Dropdown id="multiselect" options={tipo_usuario} value={value3} onChange={(e) => setValue3(e.value)} optionLabel="name"></Dropdown>
                         <small>Asegurador del Paciente</small>
                    </span>
                </div>

                   <div className="field p-fluid">
                    <label htmlFor="multiselect">Regimen</label>
                    <span className="p-float-label">
                        <Dropdown id="multiselect" options={tipo_usuario} value={value3} onChange={(e) => setValue3(e.value)} optionLabel="name"></Dropdown>
                         <small>Regimen del paciente</small>
                    </span>
                </div>




                 <div className="card">
                    <div className="grid">
                        <div className="col-12">
                            <h5>Estado del Tratamiento Actual</h5>
                            <InputText value={sliderValue as string} onChange={(e) => setSliderValue(parseInt(e.target.value))} />
                            <Slider value={sliderValue as number} onChange={(e) => setSliderValue(e.value as number)} />
                        </div>
                        <div className="col-12 md:col-6">
                            <h5>Puntos</h5>
                            <Rating value={ratingValue} onChange={(e) => setRatingValue(e.value as number)} />
                        </div>
                        <div className="col-12 md:col-6">
                            <h5>Cliente Azul</h5>
                            <ColorPicker value={colorValue} onChange={(e) => setColorValue(e.value as string)} style={{ width: '2rem' }} />
                        </div>
                        <div className="col-12">
                            <h5>Pagos Relizados</h5>
                            <Knob value={knobValue} valueTemplate={'{value}%'} onChange={(e) => setKnobValue(e.value)} step={10} min={-50} max={50} />
                        </div>
                    </div>
                </div>



                </div>





                

                 <div className="card">
                  
                    <div className="field p-fluid">
                    <h5>Comercial</h5>
                    </div><div className="field p-fluid">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={Comercial} value={value8} onChange={(e) => setValue8(e.value)} optionLabel="name"></Dropdown>
                        
                    </span>
                </div>
                </div>

                  <div className="card">
                  
                    <div className="field p-fluid">
                    <h5>Medico que lo atiende </h5>
                    </div><div className="field p-fluid">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={profesional} value={value2} onChange={(e) => setValue2(e.value)} optionLabel="name"></Dropdown>
                        
                    </span>
                </div>
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <h5>Datos Avanzados</h5>
                    <div className="p-fluid formgrid grid">
                        <div className="field col-12 md:col-6">
                            <label htmlFor="firstname2">Acudiente:</label>
                            <InputText id="firstname2" type="text" />
                        </div>   <div className="field col-12 md:col-6">
                            <label htmlFor="firstname2">Acudiente Telefono:</label>
                            <InputText id="firstname2" type="text" />
                        </div>


                        <div className="field col-12 md:col-6">
                            <label htmlFor="lastname2">Ocupación</label>
                            <InputText id="lastname2" type="text" />
                        </div>
                        <div className="field col-12">
                            <label htmlFor="address">Comentario</label>
                            <InputTextarea id="address" rows="4" />
                        </div>
                            <div className="field col-12 md:col-6">
                            <label htmlFor="sexo">Exceptpo de Reponsabilidad Civil</label>
                            <Dropdown id="sexo" value={dropdownItem2} onChange={(e) => setDropdownItem2(e.value)} options={dropdownItems2} optionLabel="name" placeholder="Select One"></Dropdown>
                     </div>  
                        <div className="field col-12 md:col-6">
                            <label htmlFor="city">Responsabilidad Fiscal</label>
                            <InputText id="city" type="text" />
                        </div>
                        

                       
                   


                    </div>
                </div>
            </div>
        </div>
    );
       
};


export default FormLayoutDemo;
