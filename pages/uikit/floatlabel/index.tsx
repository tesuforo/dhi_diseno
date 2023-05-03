import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { CountryService } from '../../../demo/service/CountryService';
import { Demo } from '../../../types/types';
    

const FloatLabelDemo = () => {
    const [countries, setCountries] = useState<Demo.Country[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<Demo.Country[]>([]);
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState(new Date());
    const [value6, setValue6] = useState<any[]>([]);
    const [value7, setValue7] = useState('');
    const [value8, setValue8] = useState<number | null>(null);
    const [value9, setValue9] = useState('');
    const [value10, setValue10] = useState(null);
    const [value11, setValue11] = useState(null);
    const [value12, setValue12] = useState('');
     const [value20, setDate20] = useState(null);
      const [value13, setValue13] = useState('');
    

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const neurologico = [
        { name: 'Niega', code: 'Niega' },
        { name: 'Refiere', code: 'Refiere' },
     
    ];
     

    useEffect(() => {
        CountryService.getCountries().then((countries) => {
            setCountries(countries);
        });
    }, []);

    const searchCountry = (event: AutoCompleteCompleteEvent) => {
        const filtered: Demo.Country[] = [];
        const query = event.query;
        for (let i = 0; i < countries.length; i++) {
            const country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        setFilteredCountries(filtered);
    };

    return (
        <div className="card">
            <h5>Consulta por Primera Vez</h5>
            <div className="grid p-fluid mt-3">
                <div className="field col-12 md:col-4">
                 <label htmlFor="identificacion1">Hora de apertura</label>
                <Calendar showTime hourFormat="12" value={value20} onChange={(e) => setDate20(e.value)}></Calendar>
                
                </div>

                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <InputTextarea id="textarea" rows={3} value={value12} onChange={(e) => setValue12(e.target.value)} autoResize></InputTextarea>
                        <label htmlFor="textarea">Motivode Consulta</label>
                    </span>
                </div>

              <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <InputTextarea id="textarea" rows={3} value={value13} onChange={(e) => setValue13(e.target.value)} autoResize></InputTextarea>
                        <label htmlFor="textarea">Enfermedad Actual</label>
                    </span>
                </div>
               
               <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={neurologico} value={value10} onChange={(e) => setValue10(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="dropdown">Neurológico</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={value2} onChange={(e) => setValue2(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Neurológico</label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={neurologico} value={value10} onChange={(e) => setValue10(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="dropdown">Órgano de los sentidos</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={value2} onChange={(e) => setValue2(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Órgano de los sentidos </label>
                    </span>
                </div>
               <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={neurologico} value={value10} onChange={(e) => setValue10(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="dropdown">Osteomuscular</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={value2} onChange={(e) => setValue2(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Osteomuscular </label>
                    </span>
                </div>
   <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={neurologico} value={value10} onChange={(e) => setValue10(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="dropdown">Cardiopulmonar</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={value2} onChange={(e) => setValue2(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Cardiopulmonar </label>
                    </span>
                </div>
   <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={neurologico} value={value10} onChange={(e) => setValue10(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="dropdown">Gastrointestinal</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={value2} onChange={(e) => setValue2(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Gastrointestinal </label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={neurologico} value={value10} onChange={(e) => setValue10(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="dropdown">Genitourinario </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={value2} onChange={(e) => setValue2(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Genitourinario  </label>
                    </span>
                </div>

 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={neurologico} value={value10} onChange={(e) => setValue10(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="dropdown">Endocrino-inmunológico </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={value2} onChange={(e) => setValue2(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Endocrino-inmunológico  </label>
                    </span>
                </div>


 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={neurologico} value={value10} onChange={(e) => setValue10(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="dropdown">Piel y anexos   </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={value2} onChange={(e) => setValue2(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Piel y Anexos</label>
                    </span>
                </div>

                <div className="field col-12 md:col-4">
                    <span className="p-float-label p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText id="lefticon" value={value3} onChange={(e) => setValue3(e.target.value)} />
                        <label htmlFor="lefticon">Left Icon</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-spin pi-spinner" />
                        <InputText id="righticon" value={value4} onChange={(e) => setValue4(e.target.value)} />
                        <label htmlFor="righticon">Right Icon</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <Calendar inputId="calendar" value={value5} onChange={(e) => setValue5(e.value as Date)}></Calendar>
                        <label htmlFor="calendar">Calendar</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <Chips inputId="chips" value={value6} onChange={(e) => setValue6(e.value ?? [])}></Chips>
                        <label htmlFor="chips">Chips</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <InputMask id="inputmask" mask="99/99/9999" slotChar="mm/dd/yyyy" value={value7} onChange={(e) => setValue7(e.value ?? '')}></InputMask>
                        <label htmlFor="inputmask">InputMask</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <InputNumber id="inputnumber" value={value8} onValueChange={(e) => setValue8(e.target.value ?? null)}></InputNumber>
                        <label htmlFor="inputnumber">InputNumber</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <span className="p-float-label">
                            <InputText type="text" id="inputgroup" value={value9} onChange={(e) => setValue9(e.target.value)} />
                            <label htmlFor="inputgroup">InputGroup</label>
                        </span>
                    </div>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={cities} value={value10} onChange={(e) => setValue10(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="dropdown">Dropdown</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <MultiSelect id="multiselect" options={cities} value={value11} onChange={(e) => setValue11(e.value)} optionLabel="name"></MultiSelect>
                        <label htmlFor="multiselect">MultiSelect</label>
                    </span>
                </div>
                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <InputTextarea id="textarea" rows={3} value={value12} onChange={(e) => setValue12(e.target.value)} autoResize></InputTextarea>
                        <label htmlFor="textarea">Textarea</label>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FloatLabelDemo;
