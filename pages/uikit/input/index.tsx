import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import { Chips } from 'primereact/chips';
import { Slider } from 'primereact/slider';
import { Knob } from 'primereact/knob';
import { Rating } from 'primereact/rating';
import { ColorPicker } from 'primereact/colorpicker';
import { RadioButton } from 'primereact/radiobutton';
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';
import { InputSwitch } from 'primereact/inputswitch';
import { ListBox } from 'primereact/listbox';
import { Dropdown } from 'primereact/dropdown';
import { ToggleButton } from 'primereact/togglebutton';
import { MultiSelect } from 'primereact/multiselect';
import { TreeSelect, TreeSelectSelectionKeysType } from 'primereact/treeselect';
import { SelectButton } from 'primereact/selectbutton';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { CountryService } from '../../../demo/service/CountryService';
import { NodeService } from '../../../demo/service/NodeService';
import { Demo } from '../../../types/types';
import TreeNode from 'primereact/treenode';

interface InputValue {
    name: string;
    code: string;
}

export const InputDemo = () => {
    const [floatValue, setFloatValue] = useState('');
    const [autoValue, setAutoValue] = useState<Demo.Country[]>([]);
    const [selectedAutoValue, setSelectedAutoValue] = useState(null);
    const [autoFilteredValue, setAutoFilteredValue] = useState<Demo.Country[]>([]);
    const [calendarValue, setCalendarValue] = useState(new Date());
    const [inputNumberValue, setInputNumberValue] = useState<number | null>(null);
    const [chipsValue, setChipsValue] = useState<any[]>([]);
    const [sliderValue, setSliderValue] = useState<number | string>(50);
    const [ratingValue, setRatingValue] = useState<number | undefined>(undefined);
    const [colorValue, setColorValue] = useState('1976D2');
    const [knobValue, setKnobValue] = useState(20);
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

    const [profesionales, setProfesionales] = useState(null);
    const [servicios, setServicios] = useState(null);
    const [estados, setEstados] = useState(null);
    const [pagos, setPagos] = useState(null);
    const [agendas, setAgendas] = useState(null);

    

    const listboxValues: InputValue[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const profesional: InputValue[] = [
        { name: 'Marcela Hoyos', code: 'Marcela Hoyos' },
        { name: 'Natalia', code: 'NataliaM' },
        { name: 'Lina', code: 'Lina' },
        { name: 'Pedro', code: 'Pedro' },
        { name: 'Juan', code: 'Juan' }
    ];

    const servicio: InputValue[] = [
        { name: '0-1', code: '0-1 500' },
        { name: '1-500-2000', code: '500-2000 mil' },
     
    ];

    const agenda: InputValue[] = [
        { name: 'Consulta', code: 'Consulta Control' },
        { name: 'Consulta Primera Vez', code: 'Consulta Primera vez' },
     
    ];

    const estado: InputValue[] = [
        { name: 'Consulta', code: 'Consulta Control' },
        { name: 'Consulta Primera Vez', code: 'Consulta Primera vez' },
     
    ];

    const pago: InputValue[] = [
        { name: 'pago', code: 'pago' },
        { name: 'pendiente', code: 'pendiente' },
     
    ];

    const multiselectValues: InputValue[] = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const selectButtonValues1: InputValue[] = [
        { name: 'Option 1', code: 'O1' },
        { name: 'Option 2', code: 'O2' },
        { name: 'Option 3', code: 'O3' }
    ];

    const selectButtonValues2 = [
        { name: 'Option 1', code: 'O1' },
        { name: 'Option 2', code: 'O2' },
        { name: 'Option 3', code: 'O3' }
    ];

    useEffect(() => {
        CountryService.getCountries().then((data) => setAutoValue(data));
        NodeService.getTreeNodes().then((data) => setTreeSelectNodes(data));
    }, []);

    const searchCountry = (event: AutoCompleteCompleteEvent) => {
        setTimeout(() => {
            if (!event.query.trim().length) {
                setAutoFilteredValue([...autoValue]);
            } else {
                setAutoFilteredValue(
                    autoValue.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    })
                );
            }
        }, 250);
    };

    const onCheckboxChange = (e: CheckboxChangeEvent) => {
        let selectedValue = [...checkboxValue];
        if (e.checked) selectedValue.push(e.value);
        else selectedValue.splice(selectedValue.indexOf(e.value), 1);

        setCheckboxValue(selectedValue);
    };

    const itemTemplate = (option: InputValue) => {
        return (
            <div className="flex align-items-center">
                <span className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px', height: '12px' }} />
                <span>{option.name}</span>
            </div>
        );
    };

    return (
        <div className="grid p-fluid">
            <div className="col-12 md:col-6">
                <div className="card">
                    <h5>Crear una Cita</h5>
                    <div className="grid formgrid">
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                            <InputText type="text" placeholder="Identificación"></InputText>
                        </div>
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                            <InputText type="text" placeholder="1 °Nombre"></InputText>
                        </div>
                        <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                            <InputText type="text" placeholder="  2 °Nombre"></InputText>
                        </div>


                        <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                            <InputText type="text" placeholder="Telefono"  />
                        </div>


                        <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                            <InputText type="text" placeholder="Correo"  />
                        </div>

                        <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                          
                        </div>

                        <div className="col-12 mb-2 lg:col-4 lg:mb-0">

                          <h5>Fecha Inicio</h5>
                    <Calendar showIcon showButtonBar value={calendarValue} onChange={(e) => setCalendarValue(e.value as Date)}></Calendar>

                    </div>
                    <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                           <h5>Fecha Final</h5>
                    <Calendar showIcon showButtonBar value={calendarValue} onChange={(e) => setCalendarValue(e.value as Date)}></Calendar>

                    </div>
                    </div>
                 <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                    <h5>Profesional</h5>
                    <Dropdown value={profesionales} onChange={(e) => setProfesionales(e.value)} options={profesional} optionLabel="name" placeholder="Select" />
                  </div>

                  <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                    <h5>Agenda</h5>
                    <Dropdown value={estado} onChange={(e) => setServicios(e.value)} options={estado} optionLabel="name" placeholder="Select" />
                  </div>
                  <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                  <h5>Observaciones</h5>
                    <InputTextarea placeholder="Observaciones" autoResize rows={3} cols={30} />
                   </div>

                  </div>



        <div className="card">
        <div className="grid formgrid">
                    <h5>Editar Información de la Cita</h5>
                    <div className="grid formgrid">
                        <div className="field col-12 md:col-3">
                            <span className="p-input-icon-left">
                                <i className="pi pi-username" />
                                <InputText type="text" placeholder="Ficha" />
                            </span>
                        </div>
                        
                        <div className="field col-12 md:col-3">
                        <span className="p-input-icon-left">
                                <i className="pi pi-user" />
                                <InputText type="text" placeholder="Nombres" />
                            </span>
                        </div>
                        <div className="field col-12 md:col-3">
                        <span className="p-input-icon-left">
                                <i className="pi pi-user" />
                                <InputText type="text" placeholder="Estado" />
                            </span>
                        </div>

                      <div className="field col-12 md:col-3">
                        <span className="p-input-icon-left">
                                <i className="pi pi-user" />
                                <InputText type="text" placeholder="Pago" />
                            </span>
                        </div>

                       <div className="field col-12 md:col-3">
                          <label htmlFor="username">Modificar Estado</label>
                           <Dropdown value={estados} onChange={(e) => setEstados(e.value)} options={estado} optionLabel="name" placeholder="Select" />

                         </div>

                         <div className="field col-12 md:col-3">
                          <label htmlFor="username"> Modificar Pago</label>
                           <Dropdown value={pagos} onChange={(e) => setPagos(e.value)} options={pago} optionLabel="name" placeholder="Select" />

                         </div>

<div className="field col-12 md:col-3">
                        
                        </div>

                        <div className="field col-12 md:col-3">
                            
                        </div>


                        <div className="field col-12 md:col-3">
                            <InputText type="text" placeholder="Telefono 1 "  />
                        </div>

                          <div className="field col-12 md:col-3">
                            <InputText type="text" placeholder="Telefono 2"  />
                        </div>


                        <div className="field col-12 md:col-3">
                            <InputText type="text" placeholder="Correo"  />
                        </div>

                        <div className="col-12 mb-2 lg:col-4 lg:mb-0">

                          <h5>Fecha Inicio</h5>
                    <Calendar showIcon showButtonBar value={calendarValue} onChange={(e) => setCalendarValue(e.value as Date)}></Calendar>

                    </div>
                    <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                           <h5>Fecha Final</h5>
                    <Calendar showIcon showButtonBar value={calendarValue} onChange={(e) => setCalendarValue(e.value as Date)}></Calendar>

                    </div>


                    <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                    <h5>Profesional</h5>
                    <Dropdown value={profesionales} onChange={(e) => setProfesionales(e.value)} options={profesional} optionLabel="name" placeholder="Select" />
                  </div>

                  <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                    <h5>Servicios</h5>
                    <Dropdown value={servicios} onChange={(e) => setServicios(e.value)} options={servicio} optionLabel="name" placeholder="Select" />
                  </div>


                  <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                    <h5>Agenda</h5>
                    <Dropdown value={agendas} onChange={(e) => setAgendas(e.value)} options={agenda} optionLabel="name" placeholder="Select" />
                  </div>

                  <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                    <h5>comentario</h5>
                    <InputTextarea placeholder="Your Message" autoResize rows={3} cols={30} />
                    </div>


                  <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                    <h5>Acciones</h5>
                    <div className="flex flex-wrap gap-2">
                        <Button label="Insumos" rounded />
                        <Button label="Perfil" severity="secondary" rounded />
                        <Button label="Historico" severity="success" rounded />
                        <Button label="Repetir" severity="info" rounded />
                        <Button label="Pagar" severity="warning" rounded />
                        <Button label="Guardar" severity="help" rounded />
                        
                    </div>
                </div>



                      </div>
                    </div>

                    </div>  

                    <h5>Float Label</h5>
                    <span className="p-float-label">
                        <InputText id="username" type="text" value={floatValue} onChange={(e) => setFloatValue(e.target.value)} />
                        <label htmlFor="username">Username</label>
                    </span>

                    <h5>Textarea</h5>
                    <InputTextarea placeholder="Your Message" autoResize rows={3} cols={30} />

                    <h5>AutoComplete</h5>
                    <AutoComplete placeholder="Search" id="dd" dropdown multiple value={selectedAutoValue} onChange={(e) => setSelectedAutoValue(e.value)} suggestions={autoFilteredValue} completeMethod={searchCountry} field="name" />

                    <h5>Calendar</h5>
                    <Calendar showIcon showButtonBar value={calendarValue} onChange={(e) => setCalendarValue(e.value as Date)}></Calendar>

                    <h5>InputNumber</h5>
                    <InputNumber value={inputNumberValue} onValueChange={(e) => setInputNumberValue(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                    <h5>Chips</h5>
                    <Chips value={chipsValue} onChange={(e) => setChipsValue(e.value ?? [])} />
               

                <div className="card">
                    <div className="grid">
                        <div className="col-12">
                            <h5>Slider</h5>
                            <InputText value={sliderValue as string} onChange={(e) => setSliderValue(parseInt(e.target.value))} />
                            <Slider value={sliderValue as number} onChange={(e) => setSliderValue(e.value as number)} />
                        </div>
                        <div className="col-12 md:col-6">
                            <h5>Rating</h5>
                            <Rating value={ratingValue} onChange={(e) => setRatingValue(e.value as number)} />
                        </div>
                        <div className="col-12 md:col-6">
                            <h5>ColorPicker</h5>
                            <ColorPicker value={colorValue} onChange={(e) => setColorValue(e.value as string)} style={{ width: '2rem' }} />
                        </div>
                        <div className="col-12">
                            <h5>Knob</h5>
                            <Knob value={knobValue} valueTemplate={'{value}%'} onChange={(e) => setKnobValue(e.value)} step={10} min={-50} max={50} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 md:col-6">
                <div className="card">
                    <h5>RadioButton</h5>
                    <div className="grid">
                        <div className="col-12 md:col-4">
                            <div className="field-radiobutton">
                                <RadioButton inputId="option1" name="option" value="Chicago" checked={radioValue === 'Chicago'} onChange={(e) => setRadioValue(e.value)} />
                                <label htmlFor="option1">Chicago</label>
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className="field-radiobutton">
                                <RadioButton inputId="option2" name="option" value="Los Angeles" checked={radioValue === 'Los Angeles'} onChange={(e) => setRadioValue(e.value)} />
                                <label htmlFor="option2">Los Angeles</label>
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className="field-radiobutton">
                                <RadioButton inputId="option3" name="option" value="New York" checked={radioValue === 'New York'} onChange={(e) => setRadioValue(e.value)} />
                                <label htmlFor="option3">New York</label>
                            </div>
                        </div>
                    </div>

                    <h5>Checkbox</h5>
                    <div className="grid">
                        <div className="col-12 md:col-4">
                            <div className="field-checkbox">
                                <Checkbox inputId="checkOption1" name="option" value="Chicago" checked={checkboxValue.indexOf('Chicago') !== -1} onChange={onCheckboxChange} />
                                <label htmlFor="checkOption1">Chicago</label>
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className="field-checkbox">
                                <Checkbox inputId="checkOption2" name="option" value="Los Angeles" checked={checkboxValue.indexOf('Los Angeles') !== -1} onChange={onCheckboxChange} />
                                <label htmlFor="checkOption2">Los Angeles</label>
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className="field-checkbox">
                                <Checkbox inputId="checkOption3" name="option" value="New York" checked={checkboxValue.indexOf('New York') !== -1} onChange={onCheckboxChange} />
                                <label htmlFor="checkOption3">New York</label>
                            </div>
                        </div>
                    </div>

                    <h5>Input Switch</h5>
                    <InputSwitch checked={switchValue} onChange={(e) => setSwitchValue(e.value ?? false)} />
                </div>

                <div className="card">
                    <h5>Listbox</h5>
                    <ListBox value={listboxValue} onChange={(e) => setListboxValue(e.value)} options={listboxValues} optionLabel="name" filter />

                    <h5>Dropdown</h5>
                    <Dropdown value={dropdownValue} onChange={(e) => setDropdownValue(e.value)} options={dropdownValue} optionLabel="name" placeholder="Select" />

                    <h5>MultiSelect</h5>
                    <MultiSelect value={multiselectValue} onChange={(e) => setMultiselectValue(e.value)} options={multiselectValues} optionLabel="name" placeholder="Select Countries" filter display="chip" itemTemplate={itemTemplate} />

                    <h5>TreeSelect</h5>
                    <TreeSelect value={selectedNode} onChange={(e) => setSelectedNode(e.value as TreeSelectSelectionKeysType)} options={treeSelectNodes} placeholder="Select Item"></TreeSelect>
                </div>

                <div className="card">
                    <h5>ToggleButton</h5>
                    <ToggleButton checked={toggleValue} onChange={(e) => setToggleValue(e.value)} onLabel="Yes" offLabel="No" />

                    <h5>SelectButton</h5>
                    <SelectButton value={selectButtonValue1} onChange={(e) => setSelectButtonValue1(e.value)} options={selectButtonValues1} optionLabel="name" />

                    <h5>SelectButton - Multiple</h5>
                    <SelectButton value={selectButtonValue2} onChange={(e) => setSelectButtonValue2(e.value)} options={selectButtonValues2} optionLabel="name" multiple />
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <h5>Input Groups</h5>
                    <div className="grid p-fluid">
                        <div className="col-12 md:col-6">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-user"></i>
                                </span>
                                <InputText placeholder="Username" />
                            </div>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-shopping-cart"></i>
                                </span>
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-globe"></i>
                                </span>
                                <InputText placeholder="Price" />
                                <span className="p-inputgroup-addon">$</span>
                                <span className="p-inputgroup-addon">.00</span>
                            </div>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="p-inputgroup">
                                <Button label="Search" />
                                <InputText placeholder="Keyword" />
                            </div>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon p-inputgroup-addon-checkbox">
                                    <Checkbox checked={inputGroupValue} onChange={(e) => setInputGroupValue(e.checked ?? false)} />
                                </span>
                                <InputText placeholder="Confirm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputDemo;
