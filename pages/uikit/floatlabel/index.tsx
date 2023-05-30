import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';   
import { Calendar } from 'primereact/calendar';
import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { CountryService } from '../../../demo/service/CountryService';
import { Demo } from '../../../types/types';
import { RadioButton } from 'primereact/radiobutton';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { Accordion, AccordionTab } from 'primereact/accordion';



    

const FloatLabelDemo = () => {
    const [countries, setCountries] = useState<Demo.Country[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<Demo.Country[]>([]);
   
    const [value5, setValue5] = useState(new Date());
    const [value6, setValue6] = useState<any[]>([]);
    const [value7, setValue7] = useState('');
    const [value8, setValue8] = useState<number | null>(null);
   
       const [value13, setValue13] = useState('');

     const [selectedAutoValue, setSelectedAutoValue] = useState(null); 
     const [autoFilteredValue, setAutoFilteredValue] = useState<Demo.Country[]>([]);
      const [horaapertura, setHoraApertura] = useState('');
       const [motivoconsulta, setMotivoConsulta] = useState('');
       const [enfermedadactual, setEnfermedadActual] = useState('');
       const [neurologico, setNeurologico] = useState('Niega');
        const [desneurologico, setDesNeurologico] = useState(null);
        const [organosentidos, setOrganSentidos] = useState('Niega');
        const [desorganosentidos, setDesOrganSentidos] = useState(null);
        const [osteomuscular, setOsteomuscular] = useState('Niega');
        const [desosteomuscular, setDesOsteomuscular] = useState('');
        const [cardiopulmonar, setCardioPulmonar] = useState('Niega');
        const [descardiopulmonar, setDesCardioPulmonar] = useState('');
        const [gastrointestinal, setGastrointestinal] = useState('Niega');
        const [desgastrointestinal, setDesGastrointestinal] = useState('');
         const [genitourinario, setGenitourinario] = useState('Niega');
        const [desgenitourinario, setDesGenitourinario] = useState('');
         const [endocrinoinmunologico, setEndocrinoInmunologico] = useState('   ');
        const [desendocrinoinmunologico, setDesEndocrinoInmunologico] = useState('');
        const [pielanexos, setPielAnexos] = useState('Niega');
        const [despielanexos, setDesPielAnexos] = useState('');
        const [antecedentesmedicos, setAntecedentesMedicos] = useState('');
        const [desantecedentesmedicos, setDesAntecedentesMedicos] = useState('');
        const [antecedesfamiliares, setAntecedentesFamiliares] = useState('');
        const [desantecedentesfamiliares, setDesAntecedentesFamiliares] = useState('');
        const [antecedentesquirurjicos, setAntecedentesQuirurgicos] = useState('');
        const [desantecedentesquirurjicos, setDesAntecedentesQuirurgicos] = useState('');
        const [antecedenteshospitalarios, setAntecedentesHospitalarios] = useState('');
        const [desantecedenteshospitalarios, setDesAntecedentesHospitalarios] = useState('');
        const [antecedentesalergicos, setAntecedentesAlergicos] = useState('');
        const [desantecedentesalergicos, setDesAntecedentesAlergicos] = useState('');

        const [antecedentesfarmacologicos, setAntecedentesFarmacologicos] = useState('');
        const [desantecedentesFarmacologicos, setDesAntecedentesFarmacologicos] = useState('');
          const [antecedentestoxicos, setAntecedentesToxicos] = useState('');
        const [desantecedentestoxicos, setDesAntecedentesToxicos] = useState('');
       const [antecedentesginecobstetricos, setAntecedentesGinecobstetricos] = useState('');
        const [desantecedentesginecobstetricos, setDesAntecedentesGinecobstetricos] = useState('');

           
        const [tipocicatrizacion, settipocicatrizacion] = useState('');
        const [menarquia, setMenarquia] = useState('');
            const [gestas, setGestas] = useState('');
             const [planificacion, setPlanificacion] = useState('');
             const [parto, setParto] = useState('');
              const [ciclo, setCiclo] = useState('');
              const [cesarea, setCesarea] = useState('');
               const [fum, setFUM] = useState('');
                const [aborto, setAborto] = useState('');



                const [densidadexistenteoccipital, setDensidadExistenteOccipital] = useState('');
                const [densidarestanteOccipital, setDensidadRestanteoccipital] = useState('');
                const [area1occipital, setArea1Occipital] = useState('');
                const [area2ccipital, setArea2Occipital] = useState('');
                const [areatotaloccipital, setAreaTotalOccipital] = useState('');
                const [numerofoliculosoccipital, setFoliculosOccipital] = useState('');



 




    

       
        
        const [antecedesalopecia, setAntecedentesAlopecia] = useState('');
        const [desantecedentesAlopecia, setDesAntecedentesAlopecia] = useState('');


        const [alopecias, setAlopecias] = useState('');
         const [radioValue, setRadioValue] = useState(null);
         const [ta, setTA] = useState('Niega');



 

      
        
       




    

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const revision_sistema = [
        { name: 'Niega', code: 'Niega' },
        { name: 'Refiere', code: 'Refiere' },
     
    ];

      const antecedentes = [
        { name: 'Niega', code: 'Niega' },
        { name: 'Refiere', code: 'Refiere' },
     
    ];

    const alopecia = [
        { name: '1', code: '1' },
        { name: '2', code: '2' },
       
    ];

     const dx1 = [
        { name: 'Impresión Diagnostico', code: 'Impresión Diagnostico' },
        { name: 'Confirmado Nuevo', code: 'Confirmado Nuevo' },
        { name: 'Confirmado Repetitivo', code: 'Confirmado Repetitivo' },
       
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
                 <label htmlFor="hora_apertura">Hora de apertura</label>
                <Calendar showTime hourFormat="12" value={horaapertura} onChange={(e) => setHoraApertura(e.value)}></Calendar>
                
                </div>

                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <InputTextarea id="motivo_consulta" rows={3} value={motivoconsulta} onChange={(e) => setMotivoConsulta(e.target.value)} autoResize></InputTextarea>
                        <label htmlFor="motivo_consulta">Motivode Consulta</label>
                    </span>
                </div>

              <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <InputTextarea id="textarea" rows={3} value={enfermedadactual} onChange={(e) => setEnfermedadActual(e.target.value)} autoResize></InputTextarea>
                        <label htmlFor="textarea">Enfermedad Actual</label>
                    </span>
                </div>
                

                        <div className="card">
                         <h5>Revision por sistema</h5>
                            <div className="grid p-fluid mt-3">
  


          
             
               
               <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={revision_sistema} value={neurologico} onChange={(e) => setNeurologico(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="dropdown">Neurológico</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={desneurologico} onChange={(e) => setDesNeurologico(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Neurológico</label>
                    </span>
                </div>



                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={revision_sistema} value={organosentidos} onChange={(e) => setOrganSentidos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="dropdown">Órgano de los sentidos</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={desorganosentidos} onChange={(e) => setDesOrganSentidos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Órgano de los sentidos </label>
                    </span>
                </div>
               <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={revision_sistema} value={osteomuscular} onChange={(e) => setOsteomuscular(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="dropdown">Osteomuscular</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={desosteomuscular} onChange={(e) => setDesOsteomuscular(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Osteomuscular </label>
                    </span>
                </div>
                  <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="cardiopulmonar" options={revision_sistema} value={cardiopulmonar} onChange={(e) => setCardioPulmonar(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="cardiopulmonar">Cardiopulmonar</label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="descardiopulmonar" value={descardiopulmonar} onChange={(e) => setDesCardioPulmonar(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="descardiopulmonar"> Descripción Cardiopulmonar </label>
                    </span>
                 </div>

                  <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="gastrointestinal" options={revision_sistema} value={gastrointestinal} onChange={(e) => setGastrointestinal(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="gastrointestinal">Gastrointestinal</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="des" value={desgastrointestinal} onChange={(e) => setDesGastrointestinal(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="des"> Descripción Gastrointestinal </label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="Genitourinario" options={revision_sistema} value={genitourinario} onChange={(e) => setGenitourinario(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="Genitourinario">Genitourinario </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="desgenitourinario" value={desgenitourinario} onChange={(e) => setDesGenitourinario(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="desgenitourinario"> Descripción Genitourinario  </label>
                    </span>
                </div>

              <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="Endocrino_inmunologico" options={revision_sistema} value={endocrinoinmunologico} onChange={(e) => setEndocrinoInmunologico(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="Endocrino_inmunologico">Endocrino-inmunológico </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="desendocrinoinmunologico" value={desendocrinoinmunologico} onChange={(e) => setDesEndocrinoInmunologico(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="desendocrinoinmunologico"> Descripción Endocrino-inmunológico  </label>
                    </span>
                </div>


                   <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Piel y anexos   </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Piel y Anexos</label>
                    </span>
                </div>

            </div>
         </div>




           <div className="card">
           <h5>Antecedentes</h5>
           <div className="grid p-fluid mt-3">           
                   <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="antecedentes_medicos" options={antecedentes} value={antecedentesmedicos} onChange={(e) => setAntecedentesMedicos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="antecedentes_medicos">Antecedentes Medicos  </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="desantecedentes_medicos" value={desantecedentesmedicos} onChange={(e) => setDesAntecedentesMedicos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="desantecedentes_medicos"> Descripción Antecedentes Medicos
                        </label>
                    </span>
                </div>


                       
                   <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="antecedentes_familiares" options={antecedentes} value={antecedesfamiliares} onChange={(e) => setAntecedentesFamiliares(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="antecedentes_familiares">Antecedentes Familiares  </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="desantecedentesfamiliares" value={desantecedentesfamiliares} onChange={(e) => setDesAntecedentesFamiliares(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="desantecedentesfamiliares"> Descripción Antecedentes Familiares</label>
                    </span>
                </div>
       
                   <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="antecedentes_alopecia" options={antecedentes} value={antecedesalopecia} onChange={(e) => setAntecedentesAlopecia(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="antecedentes_alopecia"> Antecedentes Alopecia  </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="antecedentesalopecia" value={desantecedentesAlopecia} onChange={(e) => setDesAntecedentesAlopecia(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="antecedentesalopecia"> Descripción Antecedentes Alopecia</label>
                    </span>
                </div>





               
                   <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="antecedentesquirurgicos" options={antecedentes} value={antecedentesquirurjicos} onChange={(e) => setAntecedentesQuirurgicos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="antecedentesquirurgicos">Antecedentes Quirúrgicos   </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={desantecedentesquirurjicos} onChange={(e) => setDesAntecedentesQuirurgicos   (e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Antecedentes Quirúrgicos</label>
                    </span>
                </div>


                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={antecedentes} value={antecedenteshospitalarios} onChange={(e) => setAntecedentesHospitalarios(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Antecedentes Hospitalarios   </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={desantecedenteshospitalarios} onChange={(e) => setDesAntecedentesHospitalarios(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Hospitalarios</label>
                    </span>
                </div>

              <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="antecedentesalergicos" options={antecedentes} value={antecedentesalergicos} onChange={(e) => setAntecedentesAlergicos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="antecedentesalergicos">Antecedentes Antecedentes Alérgicos   </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="desantecedentesalergicos" value={desantecedentesalergicos} onChange={(e) => setDesAntecedentesAlergicos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="desantecedentesalergicos"> Descripción Antecedentes Alérgicos</label>
                    </span>
                </div>


              <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="antecedentesfarmacologicos" options={antecedentes} value={antecedentesfarmacologicos} onChange={(e) => setAntecedentesFarmacologicos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="antecedentesfarmacologicos">Antecedentes Antecedentes Farmacológicos   </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="desantecedentesFarmacologicos" value={desantecedentesFarmacologicos} onChange={(e) => setDesAntecedentesFarmacologicos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="desantecedentesFarmacologicos"> Descripción Antecedentes Farmacológicos</label>
                    </span>
                </div>
                 

                  <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="antecedentestoxicos" options={antecedentes} value={antecedentestoxicos} onChange={(e) => setAntecedentesToxicos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="antecedentes">Antecedentes Toxicos  </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="desantecedentestoxicos" value={desantecedentestoxicos} onChange={(e) => setDesAntecedentesToxicos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="desantecedentestoxicos"> Descripción Antecedentes Toxicos</label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={antecedentes} value={antecedentesginecobstetricos} onChange={(e) => setAntecedentesGinecobstetricos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Antecedentes Ginecobstetricos </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={desantecedentesginecobstetricos} onChange={(e) => setDesAntecedentesGinecobstetricos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Antecedentes Ginecobstetricos</label>
                    </span>
                </div>



                  <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="tipocicatrizacion" value={tipocicatrizacion} onChange={(e) => settipocicatrizacion(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="tipocicatracion"> Tipo de Cicatrización</label>
                    </span>
                </div>

                  <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="menarquia" value={menarquia} onChange={(e) => setMenarquia(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="menarquia"> Menarquia</label>
                    </span>
                </div>
                 

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="gestas" value={gestas} onChange={(e) => setGestas(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="gestas"> Gestas</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="planificacion" value={planificacion} onChange={(e) => setPlanificacion(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="planificacion"> Planificación</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={parto} onChange={(e) => setParto(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Parto</label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={ciclo} onChange={(e) => setCiclo(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Ciclo</label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={cesarea} onChange={(e) => setCesarea(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Cesarea</label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={fum} onChange={(e) => setFUM(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> FUM</label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={aborto} onChange={(e) => setAborto(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Aborto</label>
                    </span>
                </div>

           </div>
           </div>

            <div className="card">
                         <h5> Examen Físico</h5>
                            <div className="grid p-fluid mt-3">

                             <div className="field col-12 md:col-3">
                                <h5>Tension Arterial</h5>
                    <InputNumber value={ta} onValueChange={(e) => setTA(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                         </div>


                   <div className="field col-12 md:col-3">

                        <h5>PESO</h5>
                    <InputNumber value={ta} onValueChange={(e) => setTA(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                    </div>

                     <div className="field col-12 md:col-3">

                        <h5>FC</h5>
                    <InputNumber value={ta} onValueChange={(e) => setTA(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                    </div>

                    <div className="field col-12 md:col-3">

                        <h5>TALLA</h5>
                    <InputNumber value={ta} onValueChange={(e) => setTA(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                    </div>

                    <div className="field col-12 md:col-3">

                        <h5>FR</h5>
                    <InputNumber value={ta} onValueChange={(e) => setTA(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                    </div>



                     <div className="field col-12 md:col-3">

                        <h5>T</h5>
                    <InputNumber value={ta} onValueChange={(e) => setTA(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                    </div>
                    



                     <div className="field col-12 md:col-3">

                        <h5>Saturación Oxigeno</h5>
                    <InputNumber value={ta} onValueChange={(e) => setTA(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                    </div>
                    


                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        
                    </span>
                </div>


                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Cabeza y Cuello </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Cabeza y Cuello</label>
                    </span>
                </div>


                </div>
            </div>

         
                <div className="card">
                    <h5>Piel y Cuero Cabelludo</h5>
                    <div className="grid">
                        <div className="col-12 md:col-4">
                            <div className="field-radiobutton">
                                <RadioButton inputId="option1" name="option" value="Chicago" checked={radioValue === 'Chicago'} onChange={(e) => setRadioValue(e.value)} />
                                <label htmlFor="option1">Normal</label>
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className="field-radiobutton">
                                <RadioButton inputId="option2" name="option" value="Los Angeles" checked={radioValue === 'Los Angeles'} onChange={(e) => setRadioValue(e.value)} />
                                <label htmlFor="option2">Graso</label>
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className="field-radiobutton">
                                <RadioButton inputId="option3" name="option" value="New York" checked={radioValue === 'New York'} onChange={(e) => setRadioValue(e.value)} />
                                <label htmlFor="option3">Descamativo</label>
                            </div>
                        </div>
                    </div>

                    </div>

                       <div className="card">
                    <h5>Pelo</h5>
                    <div className="grid">
                        <div className="col-12 md:col-4">
                            <div className="field-radiobutton">
                                <RadioButton inputId="option1" name="option" value="Chicago" checked={radioValue === 'Chicago'} onChange={(e) => setRadioValue(e.value)} />
                                <label htmlFor="option1">Normal</label>
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className="field-radiobutton">
                                <RadioButton inputId="option2" name="option" value="Los Angeles" checked={radioValue === 'Los Angeles'} onChange={(e) => setRadioValue(e.value)} />
                                <label htmlFor="option2">Tinturado</label>
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className="field-radiobutton">
                                <RadioButton inputId="option3" name="option" value="New York" checked={radioValue === 'New York'} onChange={(e) => setRadioValue(e.value)} />
                                <label htmlFor="option3">Decolorado</label>
                            </div>
                        </div>

                        <div className="col-12 md:col-4">
                            <div className="field-radiobutton">
                                <RadioButton inputId="option3" name="option" value="New York" checked={radioValue === 'New York'} onChange={(e) => setRadioValue(e.value)} />
                                <label htmlFor="option3">Keratina- Alisado Permanente</label>
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className="field-radiobutton">
                                <RadioButton inputId="option3" name="option" value="New York" checked={radioValue === 'New York'} onChange={(e) => setRadioValue(e.value)} />
                                <label htmlFor="option3">Maltratado </label>
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className="field-radiobutton">
                                <RadioButton inputId="option3" name="option" value="New York" checked={radioValue === 'New York'} onChange={(e) => setRadioValue(e.value)} />
                                <label htmlFor="option3">Quebradizo </label>
                            </div>
                        </div>

                    </div>

                    </div>
                      <div className="card">
                         <div className="grid">

                        <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Pull Test </label>
                    </span>
                </div>


                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Cardiopulmonar  </label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Cardiopulomonar </label>
                    </span>
                </div>
                  

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                       
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Abdomen  </label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripcion Adbdomen </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Extremedidades  </label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Extremidades </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Neurológico   </label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Neurológico  </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Genital   </label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Genital    </label>
                    </span>
                </div>
          <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="zona" options={alopecia} value={alopecias} onChange={(e) => setAlopecias(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="zona">Escala de Alopecias</label>
                    </span>
                     </div>
                 
                     

                     

                     


                
                   </div>
                    </div>
                  <div className="card">
                    <div className="grid">

                   <div className="field col-12 md:col-3">

                     <h5>Diagnostico Cie 10</h5>
                    <AutoComplete placeholder="Search" id="dd" dropdown multiple value={selectedAutoValue} onChange={(e) => setSelectedAutoValue(e.value)} suggestions={autoFilteredValue} completeMethod={searchCountry} field="name" />

                    </div>
                  
                   <div className="field col-12 md:col-3">

                    <h5>Observaciones</h5>
                    <InputTextarea placeholder="Your Message" autoResize rows={3} cols={30} />

                   </div>
                   
                  <div className="field col-12 md:col-3">
                    
                     </div>

                     <div className="field col-12 md:col-3">
                    
                     </div>
                    
                     <div className="field col-12 md:col-3">
                         
                    <span className="p-float-label">
                        <Dropdown id="zona" options={dx1} value={dx1} onChange={(e) => setAlopecias(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="zona">DX1</label>
                    </span>
                     </div>
                     <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                            <Dropdown id="zona" options={dx1} value={dx1} onChange={(e) => setAlopecias(e.value)} optionLabel="name"></Dropdown>
                            <label htmlFor="zona">DX2</label>
                    </span>
                     </div>




                        <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="zona" options={alopecia} value={alopecias} onChange={(e) => setAlopecias(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="zona">DX3</label>
                    </span>
                     </div>


                     <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="zona" options={alopecia} value={alopecias} onChange={(e) => setAlopecias(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="zona">DX4</label>
                    </span>
                     </div>

                      <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="zona" options={alopecia} value={alopecias} onChange={(e) => setAlopecias(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="zona">DX5</label>
                    </span>
                     </div>

                      <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="zona" options={alopecia} value={alopecias} onChange={(e) => setAlopecias(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="zona">DX5</label>
                    </span>
                     </div>

                     
                   





                    </div>
                   </div>

                    <div className="card">
                    <div className="grid">

                   <div className="field col-12 md:col-3">

                    <h5>Tratamiento</h5>
                    <InputTextarea placeholder="Your Message" autoResize rows={3} cols={30} />

                   </div>

                    


                <div className="field col-12 md:col-3">

                    <h5>Observaciones</h5>
                    <InputTextarea placeholder="Your Message" autoResize rows={3} cols={30} />

                   </div>

                   <div className="field col-12 md:col-3">
                        <h5>Aux Enfemeria</h5>
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> AUx de Enfermeria</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                        <h5>Medico</h5>
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Profesional</label>
                    </span>
                </div>

                   </div>
                   </div>





                   
                    <Accordion activeIndex={0}>
                        <AccordionTab header="Consulta de Control">
                   <div className="grid">

                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <InputTextarea id="motivo_consulta" rows={3} value={motivoconsulta} onChange={(e) => setMotivoConsulta(e.target.value)} autoResize></InputTextarea>
                        <label htmlFor="motivo_consulta">Motivode Consulta</label>
                    </span>
                 </div>

                 <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <InputTextarea id="textarea" rows={3} value={enfermedadactual} onChange={(e) => setEnfermedadActual(e.target.value)} autoResize></InputTextarea>
                        <label htmlFor="textarea">Enfermedad Actual</label>
                    </span>
                </div>
                   <div className="field col-12 md:col-4">
                    
                </div>


                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={revision_sistema} value={neurologico} onChange={(e) => setNeurologico(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="dropdown">Neurológico</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={desneurologico} onChange={(e) => setDesNeurologico(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Neurológico</label>
                    </span>
                </div>



                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={revision_sistema} value={organosentidos} onChange={(e) => setOrganSentidos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="dropdown">Órgano de los sentidos</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={desorganosentidos} onChange={(e) => setDesOrganSentidos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Órgano de los sentidos </label>
                    </span>
                </div>
               <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={revision_sistema} value={osteomuscular} onChange={(e) => setOsteomuscular(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="dropdown">Osteomuscular</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={desosteomuscular} onChange={(e) => setDesOsteomuscular(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Osteomuscular </label>
                    </span>
                </div>
                  <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="cardiopulmonar" options={revision_sistema} value={cardiopulmonar} onChange={(e) => setCardioPulmonar(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="cardiopulmonar">Cardiopulmonar</label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="descardiopulmonar" value={descardiopulmonar} onChange={(e) => setDesCardioPulmonar(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="descardiopulmonar"> Descripción Cardiopulmonar </label>
                    </span>
                 </div>

                  <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="gastrointestinal" options={revision_sistema} value={gastrointestinal} onChange={(e) => setGastrointestinal(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="gastrointestinal">Gastrointestinal</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="des" value={desgastrointestinal} onChange={(e) => setDesGastrointestinal(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="des"> Descripción Gastrointestinal </label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="Genitourinario" options={revision_sistema} value={genitourinario} onChange={(e) => setGenitourinario(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="Genitourinario">Genitourinario </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="desgenitourinario" value={desgenitourinario} onChange={(e) => setDesGenitourinario(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="desgenitourinario"> Descripción Genitourinario  </label>
                    </span>
                </div>

              <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="Endocrino_inmunologico" options={revision_sistema} value={endocrinoinmunologico} onChange={(e) => setEndocrinoInmunologico(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="Endocrino_inmunologico">Endocrino-inmunológico </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="desendocrinoinmunologico" value={desendocrinoinmunologico} onChange={(e) => setDesEndocrinoInmunologico(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="desendocrinoinmunologico"> Descripción Endocrino-inmunológico  </label>
                    </span>
                </div>


                   <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Piel y anexos   </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Piel y Anexos</label>
                    </span>
                </div>
            <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="menarquia" value={menarquia} onChange={(e) => setMenarquia(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="menarquia"> Menarquia</label>
                    </span>
                </div>
                 

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="gestas" value={gestas} onChange={(e) => setGestas(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="gestas"> Gestas</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="planificacion" value={planificacion} onChange={(e) => setPlanificacion(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="planificacion"> Planificación</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={parto} onChange={(e) => setParto(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Parto</label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={ciclo} onChange={(e) => setCiclo(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Ciclo</label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={cesarea} onChange={(e) => setCesarea(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Cesarea</label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={fum} onChange={(e) => setFUM(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> FUM</label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={aborto} onChange={(e) => setAborto(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Aborto</label>
                    </span>
                </div>

                    <div className="card">
                         <h5> Examen Físico</h5>
                            <div className="grid p-fluid mt-3">

                             <div className="field col-12 md:col-3">
                                <h5>Tension Arterial</h5>
                    <InputNumber value={ta} onValueChange={(e) => setTA(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                         </div>


                   <div className="field col-12 md:col-3">

                        <h5>PESO</h5>
                    <InputNumber value={ta} onValueChange={(e) => setTA(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                    </div>

                     <div className="field col-12 md:col-3">

                        <h5>FC</h5>
                    <InputNumber value={ta} onValueChange={(e) => setTA(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                    </div>

                    <div className="field col-12 md:col-3">

                        <h5>TALLA</h5>
                    <InputNumber value={ta} onValueChange={(e) => setTA(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                    </div>

                    <div className="field col-12 md:col-3">

                        <h5>FR</h5>
                    <InputNumber value={ta} onValueChange={(e) => setTA(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                    </div>



                     <div className="field col-12 md:col-3">

                        <h5>T</h5>
                    <InputNumber value={ta} onValueChange={(e) => setTA(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                    </div>
                    



                     <div className="field col-12 md:col-3">

                        <h5>Saturación Oxigeno</h5>
                    <InputNumber value={ta} onValueChange={(e) => setTA(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                    </div>
                    


                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        
                    </span>
                </div>


                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Cabeza y Cuello </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Cabeza y Cuello</label>
                    </span>
                </div>
                         <div className="card">
                         <div className="grid">

                        <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Pull Test </label>
                    </span>
                </div>


                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Cardiopulmonar  </label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Cardiopulomonar </label>
                    </span>
                </div>
                  

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                       
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Abdomen  </label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripcion Adbdomen </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Extremedidades  </label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Extremidades </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Neurológico   </label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Neurológico  </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Genital   </label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Genital    </label>
                    </span>
                </div>
          <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="zona" options={alopecia} value={alopecias} onChange={(e) => setAlopecias(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="zona">Escala de Alopecias</label>
                    </span>
                     </div>
                 
                    
                
                   </div>
                    </div>
                  <div className="card">
                    <div className="grid">

                   <div className="field col-12 md:col-3">

                     <h5>Diagnostico Cie 10</h5>
                    <AutoComplete placeholder="Search" id="dd" dropdown multiple value={selectedAutoValue} onChange={(e) => setSelectedAutoValue(e.value)} suggestions={autoFilteredValue} completeMethod={searchCountry} field="name" />

                    </div>
                  
                   <div className="field col-12 md:col-3">

                    <h5>Observaciones</h5>
                    <InputTextarea placeholder="Your Message" autoResize rows={3} cols={30} />

                   </div>
                   
                  <div className="field col-12 md:col-3">
                    
                     </div>

                     <div className="field col-12 md:col-3">
                    
                     </div>
                    
                     <div className="field col-12 md:col-3">
                         
                    <span className="p-float-label">
                        <Dropdown id="zona" options={dx1} value={dx1} onChange={(e) => setAlopecias(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="zona">DX1</label>
                    </span>
                     </div>
                     <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                            <Dropdown id="zona" options={dx1} value={dx1} onChange={(e) => setAlopecias(e.value)} optionLabel="name"></Dropdown>
                            <label htmlFor="zona">DX2</label>
                    </span>
                     </div>




                        <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="zona" options={alopecia} value={alopecias} onChange={(e) => setAlopecias(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="zona">DX3</label>
                    </span>
                     </div>


                     <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="zona" options={alopecia} value={alopecias} onChange={(e) => setAlopecias(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="zona">DX4</label>
                    </span>
                     </div>

                      <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="zona" options={alopecia} value={alopecias} onChange={(e) => setAlopecias(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="zona">DX5</label>
                    </span>
                     </div>

                      <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="zona" options={alopecia} value={alopecias} onChange={(e) => setAlopecias(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="zona">DX5</label>
                    </span>
                     </div>
                 

                 </div>
                 </div>

                  <div className="card">
                    <div className="grid">

                   <div className="field col-12 md:col-3">

                    <h5>Tratamiento</h5>
                    <InputTextarea placeholder="Your Message" autoResize rows={3} cols={30} />

                   </div>

                    


                <div className="field col-12 md:col-3">

                    <h5>Observaciones</h5>
                    <InputTextarea placeholder="Your Message" autoResize rows={3} cols={30} />

                   </div>

                   <div className="field col-12 md:col-3">
                        <h5>Aux Enfemeria</h5>
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> AUx de Enfermeria</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                        <h5>Medico</h5>
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Profesional</label>
                    </span>
                </div>

                   </div>
                   </div>








                </div>
                </div>
                </div>



                        </AccordionTab>
                <AccordionTab header="Calculo de Foliculos">

                    <div className="card">
                     
                            <div className="grid p-fluid mt-2">

                        <div className="field col-12 md:col-2">

                        <h6>Opcipital</h6>
                    

                        </div>
                            
                       <div className="field col-12 md:col-2">

                        <h6>Densidad Existente</h6>
                        <InputNumber value={densidadexistenteoccipital} onValueChange={(e) => setDensidadExistenteOccipital(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                        </div>

                        <div className="field col-12 md:col-2">

                        <h6>Densidad Restante</h6>
                        <InputNumber value={densidarestanteOccipital} onValueChange={(e) => setDensidadRestanteoccipital(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                        </div>


                         <div className="field col-12 md:col-2">

                        <h6>Area A</h6>
                        <InputNumber value={area1occipital} onValueChange={(e) => setArea1Occipital(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                        </div>

                        <div className="field col-12 md:col-2">
                        <h6>Area B</h6>
                        <InputNumber value={area2ccipital} onValueChange={(e) => setArea2Occipital(e.value ?? null)} showButtons mode="decimal"></InputNumber>
                         </div>

                         <div className="field col-12 md:col-2">
                        <h6>Area Total</h6>
                        <InputNumber value={areatotaloccipital} onValueChange={(e) => setAreaTotalOccipital(e.value ?? null)} showButtons mode="decimal"></InputNumber>
                         </div>


                         <div className="field col-12 md:col-2">
                        <h6>Area Foliculos</h6>
                        <InputNumber value={numerofoliculosoccipital} onValueChange={(e) => setFoliculosOccipital(e.value ?? null)} showButtons mode="decimal"></InputNumber>
                         </div>


                        </div>

                        </div>
                   
                    <div className="card">
                     
                            <div className="grid p-fluid mt-2">

                        <div className="field col-12 md:col-2">

                        <h6>Temporal</h6>
                    

                        </div>
                            
                       <div className="field col-12 md:col-2">

                        <h6>Densidad Existente</h6>
                        <InputNumber value={densidadexistenteoccipital} onValueChange={(e) => setDensidadExistenteOccipital(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                        </div>

                        <div className="field col-12 md:col-2">

                        <h6>Densidad Restante</h6>
                        <InputNumber value={densidarestanteOccipital} onValueChange={(e) => setDensidadRestanteoccipital(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                        </div>


                         <div className="field col-12 md:col-2">

                        <h6>Area A</h6>
                        <InputNumber value={area1occipital} onValueChange={(e) => setArea1Occipital(e.value ?? null)} showButtons mode="decimal"></InputNumber>

                        </div>

                        <div className="field col-12 md:col-2">
                        <h6>Area B</h6>
                        <InputNumber value={area2ccipital} onValueChange={(e) => setArea2Occipital(e.value ?? null)} showButtons mode="decimal"></InputNumber>
                         </div>

                         <div className="field col-12 md:col-2">
                        <h6>Area Total</h6>
                        <InputNumber value={areatotaloccipital} onValueChange={(e) => setAreaTotalOccipital(e.value ?? null)} showButtons mode="decimal"></InputNumber>
                         </div>


                         <div className="field col-12 md:col-2">
                        <h6>Area Foliculos</h6>
                        <InputNumber value={numerofoliculosoccipital} onValueChange={(e) => setFoliculosOccipital(e.value ?? null)} showButtons mode="decimal" ></InputNumber>
                         </div>



                         <div className="field col-12 md:col-2">

                         <h6>Promedio</h6>
                        <InputNumber value={numerofoliculosoccipital} onValueChange={(e) => setFoliculosOccipital(e.value ?? null)} showButtons mode="decimal"  buttonLayout="vertical" style={{width: '6em'}}
    decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></InputNumber>


                        
                         </div>


                     
                         




                          <div className="field col-12 md:col-2">
                        <h6>Pelo a donar</h6>
                        <InputNumber value={numerofoliculosoccipital} onValueChange={(e) => setFoliculosOccipital(e.value ?? null)} showButtons mode="decimal"   buttonLayout="vertical" style={{width: '6em'}}
    decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></InputNumber>
                         </div>

                 

                        </div>
                        </div>

                        


                         <div className="card">
                     
                            <div className="grid p-fluid mt-2">

                        <div className="field col-12 md:col-2">

                    
                      


                        </div>
                        </div>

                        </div>

            
                    

                        </AccordionTab>
                        <AccordionTab header="Cotizacion">
                            <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt
                                in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                minus.
                            </p>
                        </AccordionTab>
                    </Accordion>

            </div>
            </div>

            
            
        
    );
};

export default FloatLabelDemo;
