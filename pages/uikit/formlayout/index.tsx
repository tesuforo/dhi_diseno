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
        const [identificacion, setIdentificacion] = useState('');
        const [name1, setName1] = useState('');
        const [apellido1, setApellido1] = useState('');
        const [apellido2, setApellido2] = useState('');
        const [edad, setEdad] = useState('');
        const [acudiente, setAcudiente] = useState('');
        const [telacudiente, setTelAcudiente] = useState('');
        const [comentario, setComentario] = useState('');
        const [ocupacion, setOcupacion] = useState('');

        const [telefono1, setTelefono1] = useState('');
        const [telefono2, setTelefono2] = useState(null);
        const [correo, setCorreo] = useState('');
        const [direccion, setDireccion] = useState('');

        const [lugexpdoc, setLugExpDoc] = useState('');
        const [expdoc, setExpDoc] = useState('');
        const [pais, setPais] = useState('');
        const [departamento, setDepartamento] = useState('');
        const [fechanaci, setFechaNaci] = useState([]);
        const [municipio, setMunicipio] = useState(null);
        const [comercial, setComercial] = useState(null);
        const [asegurador, SetAsegurdador] = useState(null);
        const [zonas, setZona] = useState('');
        const [regimen, setRegimen] = useState('');
        const [profesional, setProfesional] = useState('');

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

      
    const [tipodoc, setTipoDoc] = useState(null);
    const tipoDoc = [
        { name: 'CC', code: 'CC' },
        { name: 'CE', code: 'CE' },
        { name: 'TI', code: 'TI' },
        { name: 'PA', code: 'PA' },
    ];

    const [tiposexo, setSexo] = useState(null);
    const tipoSexo = [
        { name: 'F', code: 'F' },
        { name: 'M', code: 'M' },
   
    ];

       const [extranjero, setExtranjero] = useState(null);
    const Extranjero = [
        { name: 'Si', code: 'Si' },
        { name: 'No', code: 'No' },
        
    ];

     const [estadocivil, setEstadoCivil] = useState(null);
    const EstadoCivil = [
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
 const profesionales = [
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
        

    const usuarios = [
        { name: 'contributivo', code: 'contributivo' },
        { name: 'subsidiado', code: 'Subsidiado' },
       
    ];
        
     const aseguradores = [
        { name: 'Compensar', code: 'Compensar' },
        { name: 'Cafam', code: 'Cafam' },
       
    ];
        
    

    return (
        <div className="grid">
            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h5>Paciente DHI</h5>

                     <div className="field">
                            <label htmlFor="tipo_id">Tipo Doc</label>
                            <Dropdown id="tipo_id" value={tipodoc} onChange={(e) => setTipoDoc(e.value)} options={tipoDoc} optionLabel="name" placeholder="Select One"></Dropdown>
                     </div>  
                    <div className="field">
                        <label htmlFor="identificacion">Identificación</label>
                        <InputText id="identificacion" type="text" />
                    </div>
                     <div className="field">
                         <label htmlFor="expdoc">Fecha Expedición Documento</label>
                    <span className="p-float-label">
                        <label htmlFor="calendar">Fecha</label>
                        <label htmlFor="expdoc">Fecha de Expedición documento</label>
                        <Calendar inputId="calendar" value={expdoc} onChange={(a) => setExpDoc(a.expdoc)}></Calendar> 
                    </span>
                </div>
                <div className="field">
                    <label htmlFor="lugexpdoc">Lugar Expedición Documento</label>
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={Municipio} value={lugexpdoc} onChange={(e) => setLugExpDoc(e.value)} optionLabel="name"></Dropdown>   
                    </span>
                </div>  

                  <div className="field">
                         <label htmlFor="fechanaci">Fecha Nacimiento</label>
                    <span className="p-float-label">
                        <label htmlFor="fechanaci">Fecha de Nacimiento</label>
                        <Calendar inputId="calendar" value={fechanaci} onChange={(e) => setFechaNaci(e.value)}></Calendar>
                    </span>
                </div>
         
                   
                    <div className="field">
                        <label htmlFor="name1">Nombres</label>
                        <InputText id="name1" type="text" />
                    </div>
                     <div className="field">
                        <label htmlFor="apellido1">Apellido Paterno</label>
                        <InputText id="apellido1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="apellido2">Apellidos Materno</label>
                        <InputText id="apellido2" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="edad">Edad</label>
                        <InputText id="edad" type="text" />
                    </div>


                    <div className="field">
                            <label htmlFor="sexo">sexo</label>
                            <Dropdown id="sexo" value={tiposexo} onChange={(e) => setSexo(e.value)} options={tipoSexo} optionLabel="name" placeholder="Select One"></Dropdown>
                     </div>  

                     <div className="field">
                            <label htmlFor="extranjero">Extranejero</label>
                            <Dropdown id="extranjero" value={extranjero} onChange={(e) => setExtranjero(e.value)} options={Extranjero} optionLabel="name" placeholder="Select One"></Dropdown>
                     </div>  

                   
                    <div className="field">
                            <label htmlFor="estado_civil">Estado Civil</label>
                            <Dropdown id="estado_civil" value={estadocivil} onChange={(e) => setEstadoCivil(e.value)} options={EstadoCivil} optionLabel="name" placeholder="Select One"></Dropdown>
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
                        <Dropdown id="multiselect" options={cities} value={pais} onChange={(e) => setPais(e.value)} optionLabel="Pais"></Dropdown>
                        <label htmlFor="multiselect">Pais</label>
                    </span>
                </div>

                 <div className="field col">
                    <span className="p-float-label">
                        <Dropdown id="departamento" options={departa} value={departamento} onChange={(e) => setDepartamento(e.value)} optionLabel="Departamento"></Dropdown>
                        <label htmlFor="departamento">Departamento</label>
                    </span>
                </div>
                
                <div className="field col">
                    <span className="p-float-label">
                        <Dropdown id="municipio" options={Municipio} value={municipio} onChange={(e) => setMunicipio(e.value)} optionLabel="Municipio"></Dropdown>
                        <label htmlFor="municipio">Municipio</label>
                    </span>
                  </div>

                 <div className="field col">
                    <span className="p-float-label">
                        <Dropdown id="zona" options={zona} value={zonas} onChange={(e) => setZona(e.value)} optionLabel="name"></Dropdown>
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
                        <label htmlFor="telefono1" className="col-12 mb-2 md:col-2 md:mb-0">
                            Telefono 1
                        </label>
                        <div className="col-12 md:col-10">
                            
                            <InputText id="telefono1" type="text" />
                        </div>
                    </div>
                    <div className="field grid">
                        <label htmlFor="telefono2" className="col-12 mb-2 md:col-2 md:mb-0">
                            Telefono 2
                        </label>
                        <div className="col-12 md:col-10">
                            <InputText id="telefono2" type="text" />
                        </div>
                    </div>

                     <div className="field grid">
                        <label htmlFor="correo" className="col-12 mb-2 md:col-2 md:mb-0">
                            Correo
                        </label>
                        <div className="col-12 md:col-10">
                            <InputText id="correo" type="text" />
                        </div>
                    </div>
                </div>

                

                <div className="card">
                    <h5>Asegurador y Regimen</h5>
                    
                   <div className="field p-fluid">
                    <label htmlFor="multiselect">Asegurador</label>
                    <span className="p-float-label">
                        <Dropdown id="multiselect" options={aseguradores} value={asegurador} onChange={(e) => SetAsegurdador(e.value)} optionLabel="Asegurador"></Dropdown>
                         <small>Asegurador del Paciente</small>
                    </span>
                </div>

                   <div className="field p-fluid">
                    <label htmlFor="multiselect">Regimen</label>
                    <span className="p-float-label">
                        <Dropdown id="multiselect" options={usuarios} value={regimen} onChange={(e) => setRegimen(e.value)} optionLabel="Regimen"></Dropdown>
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
                        <Dropdown id="dropdown" options={Comercial} value={comercial} onChange={(e) => setComercial(e.value)} optionLabel="Comercial"></Dropdown>   
                    </span>
                </div>
                </div>

                  <div className="card">
                  
                    <div className="field p-fluid">
                    <h5>Medico que lo atiende </h5>
                    </div><div className="field p-fluid">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={profesionales} value={profesional} onChange={(e) => setProfesional(e.value)} optionLabel="Profesional"></Dropdown>
                        
                    </span>
                </div>
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <h5>Datos Avanzados</h5>
                    <div className="p-fluid formgrid grid">
                        <div className="field col-12 md:col-6">
                            <label htmlFor="acudiente">Acudiente:</label>
                            <InputText id="acudiente" type="text" />
                        </div>   <div className="field col-12 md:col-6">
                            <label htmlFor="telacudiente">Acudiente Telefono:</label>
                            <InputText id="telacudiente" type="text" />
                        </div>

                        <div className="field col-12 md:col-6">
                            <label htmlFor="ocupacion">Ocupación</label>
                            <InputText id="ocupacion" type="text" />
                        </div>
                        <div className="field col-12">
                            <label htmlFor="comentario">Comentario</label>
                            <InputTextarea id="comentario" rows="4" />
                        </div>
                            <div className="field col-12 md:col-6">
                            <label htmlFor="sexo">Excepto de Reponsabilidad Civil</label>
                            <Dropdown id="sexo" value={extranjero} onChange={(e) => setExtranjero(e.value)} options={Extranjero} optionLabel="name" placeholder="Select One"></Dropdown>
                     </div>  
                        <div className="field col-12 md:col-6">
                            <label htmlFor="responsabilidad_civil">Responsabilidad Fiscal</label>
                            <InputText id="responsabilidad_civil" type="text" />
                        </div>
                        

                       
                   


                    </div>
                </div>
            </div>
        </div>
    );
       
};


export default FormLayoutDemo;
