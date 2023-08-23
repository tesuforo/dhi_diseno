import React, { useState, useEffect } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { CountryService } from "../../../demo/service/CountryService";
import { Demo } from "../../../types/types";
import {AutoCompleteCompleteEvent,} from "primereact/autocomplete";
import { Accordion, AccordionTab } from "primereact/accordion";
import { AutoComplete } from 'primereact/autocomplete';
import { RadioButton } from 'primereact/radiobutton';


const FloatLabelDemo = () => {
  const [countries, setCountries] = useState<Demo.Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Demo.Country[]>([]);
  const [tensiondiastolica, setTensionDiastolica] = useState(new Date());
  const [tensionsiastolica, setTensionSiastolica] = useState<any[]>([]);
  const [freuenciacardiaca, setFrecuenciaCardiaca] = useState("");
  const [freuenciarespiraatoria, setFrecuenciaRespiratoria] = useState("");
  const [saturacion, setSaturacion] = useState("");
  const [peso, setPeso] = useState("");
  const [talla, setTalla] = useState("");
  const [temperatura, setTemperatura] = useState("");
  const [selectedAutoValue, setSelectedAutoValue] = useState(null);
  const [autoFilteredValue, setAutoFilteredValue] = useState<Demo.Country[]>([] );
  const [horaapertura, setHoraApertura] = useState("");
  const [motivoconsulta, setMotivoConsulta] = useState("");
  const [enfermedadactual, setEnfermedadActual] = useState("");
  const [neurologico, setNeurologico] = useState("Niega");
  const [desneurologico, setDesNeurologico] = useState(null);
  const [organosentidos, setOrganSentidos] = useState("Niega");
  const [desorganosentidos, setDesOrganSentidos] = useState(null);
  const [osteomuscular, setOsteomuscular] = useState("Niega");
  const [desosteomuscular, setDesOsteomuscular] = useState("");
  const [cardiopulmonar, setCardioPulmonar] = useState("Niega");
  const [descardiopulmonar, setDesCardioPulmonar] = useState("");
  const [gastrointestinal, setGastrointestinal] = useState("Niega");
  const [desgastrointestinal, setDesGastrointestinal] = useState("");
  const [genitourinario, setGenitourinario] = useState("Niega");
  const [desgenitourinario, setDesGenitourinario] = useState("");
  const [endocrinoinmunologico, setEndocrinoInmunologico] = useState("   ");
  const [desendocrinoinmunologico, setDesEndocrinoInmunologico] = useState("");
  const [pielanexos, setPielAnexos] = useState("Niega");
  const [despielanexos, setDesPielAnexos] = useState("");
  const [antecedentesmedicos, setAntecedentesMedicos] = useState("");
  const [desantecedentesmedicos, setDesAntecedentesMedicos] = useState("");
  const [antecedesfamiliares, setAntecedentesFamiliares] = useState("");
  const [desantecedentesfamiliares, setDesAntecedentesFamiliares] =useState("");
  const [antecedentesquirurjicos, setAntecedentesQuirurgicos] = useState("");
  const [desantecedentesquirurjicos, setDesAntecedentesQuirurgicos] =useState("");
  const [antecedenteshospitalarios, setAntecedentesHospitalarios] = useState("");
  const [desantecedenteshospitalarios, setDesAntecedentesHospitalarios] =useState("");
  const [antecedentesalergicos, setAntecedentesAlergicos] = useState("");
  const [desantecedentesalergicos, setDesAntecedentesAlergicos] = useState("");
  const [antecedentesfarmacologicos, setAntecedentesFarmacologicos] =useState("");
  const [desantecedentesFarmacologicos, setDesAntecedentesFarmacologicos] =useState("");
  const [antecedentestoxicos, setAntecedentesToxicos] = useState("");
  const [desantecedentestoxicos, setDesAntecedentesToxicos] = useState("");
  const [antecedentesginecobstetricos, setAntecedentesGinecobstetricos] =useState("");
  const [desantecedentesginecobstetricos, setDesAntecedentesGinecobstetricos] =useState("");
  const [tipocicatrizacion, settipocicatrizacion] = useState("");
  const [menarquia, setMenarquia] = useState("");
  const [gestas, setGestas] = useState("");
  const [planificacion, setPlanificacion] = useState("");
  const [numerofoliculos, setNumeroFoliculos] = useState("");
  const [numerofoliculoscejas, setNumeroFoliculosCejas] = useState("");
  const [name1, setName1] = useState('');
  const [parto, setParto] = useState("");
  const [ciclo, setCiclo] = useState("");
  const [cesarea, setCesarea] = useState("");
  const [fum, setFUM] = useState("");
  const [aborto, setAborto] = useState("");
  const [densidadexistenteoccipital, setDensidadExistenteOccipital] =useState("");
  const [densidarestanteOccipital, setDensidadRestanteoccipital] = useState("");
  const [area1occipital, setArea1Occipital] = useState("");
  const [area2ccipital, setArea2Occipital] = useState("");
  const [areatotaloccipital, setAreaTotalOccipital] = useState("");
  const [numerofoliculosoccipital, setFoliculosOccipital] = useState("");
  const [zonaadensidaexistente, setZonaaDensidaExistente] = useState("");
  const [zonaadensidadrestante, setZonaadensidadrestante] = useState("");
  const [zonaaareasdensidad, setZonaaareasdensidad] = useState("");
  const [zonaabareasdensidad, setZonaabareasdensidad] = useState("");
  const [zonaatotal, setZonaaTotal] = useState("");
  const [zonaanumeropelos, setzonaanumeropelos] = useState("");
  const [objetivodensidadpromedio, setobjetivodensidadpromedio] = useState("");
  const [sesiones, setSesiones] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [notaaclaratoria, setNotaAclaratoria] = useState("");
  const [notaaclaratoriaenfermerialavado, setNotaAclaratoriaEnfermeriaLavado] = useState("");
  const [notafotoenfermeria, setNotaFotoEnfermeria] = useState("");
  const [NOTAENFERMERIA, setNOTAENFERMERIA] = useState("");
  const [notadeenfermeriaimplantecapilar, setNotaDeEnfermeriaImplanteCapilar] = useState("");
  const [notarecepcion, setNotaRecepcion] = useState("");
  const [antecedesalopecia, setAntecedentesAlopecia] = useState("");
  const [desantecedentesAlopecia, setDesAntecedentesAlopecia] = useState("");
  const [alopecias, setAlopecias] = useState("");
  const [radioValue, setRadioValue] = useState(null);
  const [ta, setTA] = useState("Niega");

   const [diaprocedimientoenfermeria, setDiaProcedimientoEnfermeria] = useState(null);
   const [notaenfermeriadrenaje, setNotaEnfermeriaDrenaje] = useState(null);


   const [implanteenfermeria, setImplanteEnfermeria] = useState(null);

    const [category, setSelectedCategory] = useState(null);

    const [terapias_enfermerias, setTerapiasEnfermeria] = useState(null);


    
    




  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const revision_sistema = [
    { name: "Niega", code: "Niega" },
    { name: "Refiere", code: "Refiere" },
  ];

  const antecedentes = [
    { name: "Niega", code: "Niega" },
    { name: "Refiere", code: "Refiere" },
  ];

    const sesion = [
    { name: "0-1500", code: "0-1500" },
    { name: "1500-2000", code: "1500-2000" },
  ]; 

  const alopecia = [
    { name: "1", code: "1" },
    { name: "2", code: "2" },
  ];

  const dx1 = [
    { name: "Impresión Diagnostico", code: "Impresión Diagnostico" },
    { name: "Confirmado Nuevo", code: "Confirmado Nuevo" },
    { name: "Confirmado Repetitivo", code: "Confirmado Repetitivo" },
  ];

  const dia_procedimiento_enfermeria = [
    { name: "dia1", code: "dia1" },
    { name: "dia2", code: "dia2" },

  ];

  const implante_enfermeria = [
    { name: "Capilar", code: "Capilar" },
    { name: "Barba", code: "Barba" },
    { name: "ceja", code: "Ceja" },
    { name: "Mixto", code: "Mixto" },

  ];


   const categories = [
    { name: "Capilar", code: "Capilar" },
    { name: "Barba", code: "Barba" },
    { name: "ceja", code: "Ceja" },
    { name: "Mixto", code: "Mixto" },

  ];


    const terapias = [
    { name: "No Aplica", code: "No Aplica" },
    { name: "Choque", code: "Choque" },
    { name: "Regular", code: "Regula" },
    { name: "Standard", code: "Standard" },
    { name: "Unica", code: "Unica" },
    { name: "Dutasteride", code: "Dutastiride" },
    { name: "Kenacort", code: "Kenacort" },

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
          <Calendar
            showTime
            hourFormat="12"
            value={horaapertura}
            onChange={(e) => setHoraApertura(e.value)}
          ></Calendar>
        </div>

        <div className="field col-12 md:col-4">
          <span className="p-float-label">
            <InputTextarea
              id="motivo_consulta"
              rows={3}
              value={motivoconsulta}
              onChange={(e) => setMotivoConsulta(e.target.value)}
              autoResize
            ></InputTextarea>
            <label htmlFor="motivo_consulta">Motivode Consulta</label>
          </span>
        </div>

        <div className="field col-12 md:col-4">
          <span className="p-float-label">
            <InputTextarea
              id="textarea"
              rows={3}
              value={enfermedadactual}
              onChange={(e) => setEnfermedadActual(e.target.value)}
              autoResize
            ></InputTextarea>
            <label htmlFor="textarea">Enfermedad Actual</label>
          </span>
        </div>

        <div className="card">
          <h5>Revision por sistema</h5>
          <div className="grid p-fluid mt-3">
            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="dropdown"
                  options={revision_sistema}
                  value={neurologico}
                  onChange={(e) => setNeurologico(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="dropdown">Neurológico</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={desneurologico}
                  onChange={(e) => setDesNeurologico(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="autocomplete"> Descripción Neurológico</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="dropdown"
                  options={revision_sistema}
                  value={organosentidos}
                  onChange={(e) => setOrganSentidos(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="dropdown">Órgano de los sentidos</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={desorganosentidos}
                  onChange={(e) => setDesOrganSentidos(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="autocomplete">
                  {" "}
                  Descripción Órgano de los sentidos{" "}
                </label>
              </span>
            </div>
            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="dropdown"
                  options={revision_sistema}
                  value={osteomuscular}
                  onChange={(e) => setOsteomuscular(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="dropdown">Osteomuscular</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={desosteomuscular}
                  onChange={(e) => setDesOsteomuscular(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="autocomplete">
                  {" "}
                  Descripción Osteomuscular{" "}
                </label>
              </span>
            </div>
            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="cardiopulmonar"
                  options={revision_sistema}
                  value={cardiopulmonar}
                  onChange={(e) => setCardioPulmonar(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="cardiopulmonar">Cardiopulmonar</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="descardiopulmonar"
                  value={descardiopulmonar}
                  onChange={(e) => setDesCardioPulmonar(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="descardiopulmonar">
                  {" "}
                  Descripción Cardiopulmonar{" "}
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="gastrointestinal"
                  options={revision_sistema}
                  value={gastrointestinal}
                  onChange={(e) => setGastrointestinal(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="gastrointestinal">Gastrointestinal</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="des"
                  value={desgastrointestinal}
                  onChange={(e) => setDesGastrointestinal(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="des"> Descripción Gastrointestinal </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="Genitourinario"
                  options={revision_sistema}
                  value={genitourinario}
                  onChange={(e) => setGenitourinario(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="Genitourinario">Genitourinario </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="desgenitourinario"
                  value={desgenitourinario}
                  onChange={(e) => setDesGenitourinario(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="desgenitourinario">
                  {" "}
                  Descripción Genitourinario{" "}
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="Endocrino_inmunologico"
                  options={revision_sistema}
                  value={endocrinoinmunologico}
                  onChange={(e) => setEndocrinoInmunologico(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="Endocrino_inmunologico">
                  Endocrino-inmunológico{" "}
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="desendocrinoinmunologico"
                  value={desendocrinoinmunologico}
                  onChange={(e) => setDesEndocrinoInmunologico(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="desendocrinoinmunologico">
                  {" "}
                  Descripción Endocrino-inmunológico{" "}
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="pielanexos"
                  options={revision_sistema}
                  value={pielanexos}
                  onChange={(e) => setPielAnexos(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="pielanexos">Piel y anexos </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={despielanexos}
                  onChange={(e) => setDesPielAnexos(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
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
                <Dropdown
                  id="antecedentes_medicos"
                  options={antecedentes}
                  value={antecedentesmedicos}
                  onChange={(e) => setAntecedentesMedicos(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="antecedentes_medicos">
                  Antecedentes Medicos{" "}
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="desantecedentes_medicos"
                  value={desantecedentesmedicos}
                  onChange={(e) => setDesAntecedentesMedicos(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="desantecedentes_medicos">
                  {" "}
                  Descripción Antecedentes Medicos
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="antecedentes_familiares"
                  options={antecedentes}
                  value={antecedesfamiliares}
                  onChange={(e) => setAntecedentesFamiliares(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="antecedentes_familiares">
                  Antecedentes Familiares{" "}
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="desantecedentesfamiliares"
                  value={desantecedentesfamiliares}
                  onChange={(e) => setDesAntecedentesFamiliares(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="desantecedentesfamiliares">
                  {" "}
                  Descripción Antecedentes Familiares
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="antecedentes_alopecia"
                  options={antecedentes}
                  value={antecedesalopecia}
                  onChange={(e) => setAntecedentesAlopecia(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="antecedentes_alopecia">
                  {" "}
                  Antecedentes Alopecia{" "}
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="antecedentesalopecia"
                  value={desantecedentesAlopecia}
                  onChange={(e) => setDesAntecedentesAlopecia(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="antecedentesalopecia">
                  {" "}
                  Descripción Antecedentes Alopecia
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="antecedentesquirurgicos"
                  options={antecedentes}
                  value={antecedentesquirurjicos}
                  onChange={(e) => setAntecedentesQuirurgicos(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="antecedentesquirurgicos">
                  Antecedentes Quirúrgicos{" "}
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={desantecedentesquirurjicos}
                  onChange={(e) => setDesAntecedentesQuirurgicos(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="autocomplete">
                  {" "}
                  Descripción Antecedentes Quirúrgicos
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="pielanexos"
                  options={antecedentes}
                  value={antecedenteshospitalarios}
                  onChange={(e) => setAntecedentesHospitalarios(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="pielanexos">Antecedentes Hospitalarios </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={desantecedenteshospitalarios}
                  onChange={(e) => setDesAntecedentesHospitalarios(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="autocomplete"> Descripción Hospitalarios</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="antecedentesalergicos"
                  options={antecedentes}
                  value={antecedentesalergicos}
                  onChange={(e) => setAntecedentesAlergicos(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="antecedentesalergicos">
                  Antecedentes Antecedentes Alérgicos{" "}
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="desantecedentesalergicos"
                  value={desantecedentesalergicos}
                  onChange={(e) => setDesAntecedentesAlergicos(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="desantecedentesalergicos">
                  {" "}
                  Descripción Antecedentes Alérgicos
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="antecedentesfarmacologicos"
                  options={antecedentes}
                  value={antecedentesfarmacologicos}
                  onChange={(e) => setAntecedentesFarmacologicos(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="antecedentesfarmacologicos">
                  Antecedentes Antecedentes Farmacológicos{" "}
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="desantecedentesFarmacologicos"
                  value={desantecedentesFarmacologicos}
                  onChange={(e) => setDesAntecedentesFarmacologicos(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="desantecedentesFarmacologicos">
                  {" "}
                  Descripción Antecedentes Farmacológicos
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="antecedentestoxicos"
                  options={antecedentes}
                  value={antecedentestoxicos}
                  onChange={(e) => setAntecedentesToxicos(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="antecedentes">Antecedentes Toxicos </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="desantecedentestoxicos"
                  value={desantecedentestoxicos}
                  onChange={(e) => setDesAntecedentesToxicos(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="desantecedentestoxicos">
                  {" "}
                  Descripción Antecedentes Toxicos
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="pielanexos"
                  options={antecedentes}
                  value={antecedentesginecobstetricos}
                  onChange={(e) => setAntecedentesGinecobstetricos(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="pielanexos">
                  Antecedentes Ginecobstetricos{" "}
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={desantecedentesginecobstetricos}
                  onChange={(e) => setDesAntecedentesGinecobstetricos(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="autocomplete">
                  {" "}
                  Descripción Antecedentes Ginecobstetricos
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="tipocicatrizacion"
                  value={tipocicatrizacion}
                  onChange={(e) => settipocicatrizacion(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="tipocicatracion"> Tipo de Cicatrización</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="menarquia"
                  value={menarquia}
                  onChange={(e) => setMenarquia(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="menarquia"> Menarquia</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="gestas"
                  value={gestas}
                  onChange={(e) => setGestas(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="gestas"> Gestas</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="planificacion"
                  value={planificacion}
                  onChange={(e) => setPlanificacion(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="planificacion"> Planificación</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={parto}
                  onChange={(e) => setParto(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="autocomplete"> Parto</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={ciclo}
                  onChange={(e) => setCiclo(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="autocomplete"> Ciclo</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={cesarea}
                  onChange={(e) => setCesarea(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="autocomplete"> Cesarea</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={fum}
                  onChange={(e) => setFUM(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="autocomplete"> FUM</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={aborto}
                  onChange={(e) => setAborto(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="autocomplete"> Aborto</label>
              </span>
            </div>
          </div>
        </div>

        <div className="card">
          <h5> Examen Físico</h5>
          <div className="grid p-fluid mt-3">
            <div className="field col-12 md:col-3">
              <h5>Tension Arteria Diastolica</h5>
              <InputNumber
                value={tensiondiastolica}
                onValueChange={(e) => setTensionDiastolica(e.value ?? null)}
                showButtons
                mode="decimal"
              ></InputNumber>
            </div>

            <div className="field col-12 md:col-3">
              <h5>Tension Arterial Sistolica</h5>
              <InputNumber
                value={tensionsiastolica}
                onValueChange={(e) => setTensionSiastolica(e.value ?? null)}
                showButtons
                mode="decimal"
              ></InputNumber>
            </div>

            <div className="field col-12 md:col-3">
              <h5>Peso kilogramos</h5>
              <InputNumber
                value={peso}
                onValueChange={(e) => setPeso(e.value ?? null)}
                showButtons
                mode="decimal"
              ></InputNumber>
            </div>

            <div className="field col-12 md:col-3">
              <h5>Frecuencia Cardiaca</h5>
              <InputNumber
                value={freuenciacardiaca}
                onValueChange={(e) => setFrecuenciaCardiaca(e.value ?? null)}
                showButtons
                mode="decimal"
              ></InputNumber>
            </div>

            <div className="field col-12 md:col-3">
              <h5>Talla CM</h5>
              <InputNumber
                value={talla}
                onValueChange={(e) => setTalla(e.value ?? null)}
                showButtons
                mode="decimal"
              ></InputNumber>
            </div>

            <div className="field col-12 md:col-3">
              <h5>Frecuencia Respiratoria</h5>
              <InputNumber
                value={freuenciarespiraatoria}
                onValueChange={(e) =>
                  setFrecuenciaRespiratoria(e.value ?? null)
                }
                showButtons
                mode="decimal"
              ></InputNumber>
            </div>

            <div className="field col-12 md:col-3">
              <h5>Temperatura</h5>
              <InputNumber
                value={temperatura}
                onValueChange={(e) => setTemperatura(e.value ?? null)}
                showButtons
                mode="decimal"
              ></InputNumber>
            </div>

            <div className="field col-12 md:col-3">
              <h5>Saturación Oxigeno</h5>
              <InputNumber
                value={saturacion}
                onValueChange={(e) => setSaturacion(e.value ?? null)}
                showButtons
                mode="decimal"
              ></InputNumber>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label"></span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="pielanexos"
                  options={revision_sistema}
                  value={pielanexos}
                  onChange={(e) => setPielAnexos(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="pielanexos">Cabeza y Cuello </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={despielanexos}
                  onChange={(e) => setDesPielAnexos(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="autocomplete">
                  {" "}
                  Descripción Cabeza y Cuello
                </label>
              </span>
            </div>
          </div>
        </div>

        <div className="card">
          <h5>Piel y Cuero Cabelludo</h5>
          <div className="grid">
            <div className="col-12 md:col-4">
              <div className="field-radiobutton">
                <RadioButton
                  inputId="option1"
                  name="option"
                  value="Chicago"
                  checked={radioValue === "Chicago"}
                  onChange={(e) => setRadioValue(e.value)}
                />
                <label htmlFor="option1">Normal</label>
              </div>
            </div>
            <div className="col-12 md:col-4">
              <div className="field-radiobutton">
                <RadioButton
                  inputId="option2"
                  name="option"
                  value="Los Angeles"
                  checked={radioValue === "Los Angeles"}
                  onChange={(e) => setRadioValue(e.value)}
                />
                <label htmlFor="option2">Graso</label>
              </div>
            </div>
            <div className="col-12 md:col-4">
              <div className="field-radiobutton">
                <RadioButton
                  inputId="option3"
                  name="option"
                  value="New York"
                  checked={radioValue === "New York"}
                  onChange={(e) => setRadioValue(e.value)}
                />
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
                <RadioButton
                  inputId="option1"
                  name="option"
                  value="Chicago"
                  checked={radioValue === "Chicago"}
                  onChange={(e) => setRadioValue(e.value)}
                />
                <label htmlFor="option1">Normal</label>
              </div>
            </div>
            <div className="col-12 md:col-4">
              <div className="field-radiobutton">
                <RadioButton
                  inputId="option2"
                  name="option"
                  value="Los Angeles"
                  checked={radioValue === "Los Angeles"}
                  onChange={(e) => setRadioValue(e.value)}
                />
                <label htmlFor="option2">Tinturado</label>
              </div>
            </div>
            <div className="col-12 md:col-4">
              <div className="field-radiobutton">
                <RadioButton
                  inputId="option3"
                  name="option"
                  value="New York"
                  checked={radioValue === "New York"}
                  onChange={(e) => setRadioValue(e.value)}
                />
                <label htmlFor="option3">Decolorado</label>
              </div>
            </div>

            <div className="col-12 md:col-4">
              <div className="field-radiobutton">
                <RadioButton
                  inputId="option3"
                  name="option"
                  value="New York"
                  checked={radioValue === "New York"}
                  onChange={(e) => setRadioValue(e.value)}
                />
                <label htmlFor="option3">Keratina- Alisado Permanente</label>
              </div>
            </div>
            <div className="col-12 md:col-4">
              <div className="field-radiobutton">
                <RadioButton
                  inputId="option3"
                  name="option"
                  value="New York"
                  checked={radioValue === "New York"}
                  onChange={(e) => setRadioValue(e.value)}
                />
                <label htmlFor="option3">Maltratado </label>
              </div>
            </div>
            <div className="col-12 md:col-4">
              <div className="field-radiobutton">
                <RadioButton
                  inputId="option3"
                  name="option"
                  value="New York"
                  checked={radioValue === "New York"}
                  onChange={(e) => setRadioValue(e.value)}
                />
                <label htmlFor="option3">Quebradizo </label>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="grid">
            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={despielanexos}
                  onChange={(e) => setDesPielAnexos(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="autocomplete"> Pull Test </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="pielanexos"
                  options={revision_sistema}
                  value={pielanexos}
                  onChange={(e) => setPielAnexos(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="pielanexos">Cardiopulmonar </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={despielanexos}
                  onChange={(e) => setDesPielAnexos(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="autocomplete">
                  {" "}
                  Descripción Cardiopulomonar{" "}
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label"></span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="pielanexos"
                  options={revision_sistema}
                  value={pielanexos}
                  onChange={(e) => setPielAnexos(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="pielanexos">Abdomen </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={despielanexos}
                  onChange={(e) => setDesPielAnexos(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="autocomplete"> Descripcion Adbdomen </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="pielanexos"
                  options={revision_sistema}
                  value={pielanexos}
                  onChange={(e) => setPielAnexos(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="pielanexos">Extremedidades </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={despielanexos}
                  onChange={(e) => setDesPielAnexos(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="autocomplete"> Descripción Extremidades </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="pielanexos"
                  options={revision_sistema}
                  value={pielanexos}
                  onChange={(e) => setPielAnexos(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="pielanexos">Neurológico </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={despielanexos}
                  onChange={(e) => setDesPielAnexos(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="autocomplete"> Descripción Neurológico </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="pielanexos"
                  options={revision_sistema}
                  value={pielanexos}
                  onChange={(e) => setPielAnexos(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="pielanexos">Genital </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={despielanexos}
                  onChange={(e) => setDesPielAnexos(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="autocomplete"> Descripción Genital </label>
              </span>
            </div>
            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="zona"
                  options={alopecia}
                  value={alopecias}
                  onChange={(e) => setAlopecias(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="zona">Escala de Alopecias</label>
              </span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="grid">
            <div className="field col-12 md:col-3">
              <h5>Diagnostico Cie 10</h5>
              <AutoComplete
                placeholder="Search"
                id="dd"
                dropdown
                multiple
                value={selectedAutoValue}
                onChange={(e) => setSelectedAutoValue(e.value)}
                suggestions={autoFilteredValue}
                completeMethod={searchCountry}
                field="name"
              />
            </div>

            <div className="field col-12 md:col-3">
              <h5>Observaciones</h5>
              <InputTextarea
                placeholder="Your Message"
                autoResize
                rows={3}
                cols={30}
              />
            </div>

            <div className="field col-12 md:col-3"></div>

            <div className="field col-12 md:col-3"></div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="zona"
                  options={dx1}
                  value={dx1}
                  onChange={(e) => setAlopecias(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="zona">DX1</label>
              </span>
            </div>
            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="zona"
                  options={dx1}
                  value={dx1}
                  onChange={(e) => setAlopecias(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="zona">DX2</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="zona"
                  options={alopecia}
                  value={alopecias}
                  onChange={(e) => setAlopecias(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="zona">DX3</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="zona"
                  options={alopecia}
                  value={alopecias}
                  onChange={(e) => setAlopecias(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="zona">DX4</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="zona"
                  options={alopecia}
                  value={alopecias}
                  onChange={(e) => setAlopecias(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="zona">DX5</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <Dropdown
                  id="zona"
                  options={alopecia}
                  value={alopecias}
                  onChange={(e) => setAlopecias(e.value)}
                  optionLabel="name"
                ></Dropdown>
                <label htmlFor="zona">DX5</label>
              </span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="grid">
            <div className="field col-12 md:col-3">
              <h5>Tratamiento</h5>
              <InputTextarea
                placeholder="Your Message"
                autoResize
                rows={3}
                cols={30}
              />
            </div>

            <div className="field col-12 md:col-3">
              <h5>Observaciones</h5>
              <InputTextarea
                placeholder="Your Message"
                autoResize
                rows={3}
                cols={30}
              />
            </div>

            <div className="field col-12 md:col-3">
              <h5>Aux Enfemeria</h5>
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={despielanexos}
                  onChange={(e) => setDesPielAnexos(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
                <label htmlFor="autocomplete"> AUx de Enfermeria</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <h5>Medico</h5>
              <span className="p-float-label">
                <AutoComplete
                  id="autocomplete"
                  value={despielanexos}
                  onChange={(e) => setDesPielAnexos(e.value)}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="name"
                ></AutoComplete>
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
                  <InputTextarea
                    id="motivo_consulta"
                    rows={3}
                    value={motivoconsulta}
                    onChange={(e) => setMotivoConsulta(e.target.value)}
                    autoResize
                  ></InputTextarea>
                  <label htmlFor="motivo_consulta">Motivode Consulta</label>
                </span>
              </div>

              <div className="field col-12 md:col-4">
                <span className="p-float-label">
                  <InputTextarea
                    id="textarea"
                    rows={3}
                    value={enfermedadactual}
                    onChange={(e) => setEnfermedadActual(e.target.value)}
                    autoResize
                  ></InputTextarea>
                  <label htmlFor="textarea">Enfermedad Actual</label>
                </span>
              </div>
              <div className="field col-12 md:col-4"></div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <Dropdown
                    id="dropdown"
                    options={revision_sistema}
                    value={neurologico}
                    onChange={(e) => setNeurologico(e.value)}
                    optionLabel="name"
                  ></Dropdown>
                  <label htmlFor="dropdown">Neurológico</label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <AutoComplete
                    id="autocomplete"
                    value={desneurologico}
                    onChange={(e) => setDesNeurologico(e.value)}
                    suggestions={filteredCountries}
                    completeMethod={searchCountry}
                    field="name"
                  ></AutoComplete>
                  <label htmlFor="autocomplete"> Descripción Neurológico</label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <Dropdown
                    id="dropdown"
                    options={revision_sistema}
                    value={organosentidos}
                    onChange={(e) => setOrganSentidos(e.value)}
                    optionLabel="name"
                  ></Dropdown>
                  <label htmlFor="dropdown">Órgano de los sentidos</label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <AutoComplete
                    id="autocomplete"
                    value={desorganosentidos}
                    onChange={(e) => setDesOrganSentidos(e.value)}
                    suggestions={filteredCountries}
                    completeMethod={searchCountry}
                    field="name"
                  ></AutoComplete>
                  <label htmlFor="autocomplete">
                    {" "}
                    Descripción Órgano de los sentidos{" "}
                  </label>
                </span>
              </div>
              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <Dropdown
                    id="dropdown"
                    options={revision_sistema}
                    value={osteomuscular}
                    onChange={(e) => setOsteomuscular(e.value)}
                    optionLabel="name"
                  ></Dropdown>
                  <label htmlFor="dropdown">Osteomuscular</label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <AutoComplete
                    id="autocomplete"
                    value={desosteomuscular}
                    onChange={(e) => setDesOsteomuscular(e.value)}
                    suggestions={filteredCountries}
                    completeMethod={searchCountry}
                    field="name"
                  ></AutoComplete>
                  <label htmlFor="autocomplete">
                    {" "}
                    Descripción Osteomuscular{" "}
                  </label>
                </span>
              </div>
              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <Dropdown
                    id="cardiopulmonar"
                    options={revision_sistema}
                    value={cardiopulmonar}
                    onChange={(e) => setCardioPulmonar(e.value)}
                    optionLabel="name"
                  ></Dropdown>
                  <label htmlFor="cardiopulmonar">Cardiopulmonar</label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <AutoComplete
                    id="descardiopulmonar"
                    value={descardiopulmonar}
                    onChange={(e) => setDesCardioPulmonar(e.value)}
                    suggestions={filteredCountries}
                    completeMethod={searchCountry}
                    field="name"
                  ></AutoComplete>
                  <label htmlFor="descardiopulmonar">
                    {" "}
                    Descripción Cardiopulmonar{" "}
                  </label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <Dropdown
                    id="gastrointestinal"
                    options={revision_sistema}
                    value={gastrointestinal}
                    onChange={(e) => setGastrointestinal(e.value)}
                    optionLabel="name"
                  ></Dropdown>
                  <label htmlFor="gastrointestinal">Gastrointestinal</label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <AutoComplete
                    id="des"
                    value={desgastrointestinal}
                    onChange={(e) => setDesGastrointestinal(e.value)}
                    suggestions={filteredCountries}
                    completeMethod={searchCountry}
                    field="name"
                  ></AutoComplete>
                  <label htmlFor="des"> Descripción Gastrointestinal </label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <Dropdown
                    id="Genitourinario"
                    options={revision_sistema}
                    value={genitourinario}
                    onChange={(e) => setGenitourinario(e.value)}
                    optionLabel="name"
                  ></Dropdown>
                  <label htmlFor="Genitourinario">Genitourinario </label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <AutoComplete
                    id="desgenitourinario"
                    value={desgenitourinario}
                    onChange={(e) => setDesGenitourinario(e.value)}
                    suggestions={filteredCountries}
                    completeMethod={searchCountry}
                    field="name"
                  ></AutoComplete>
                  <label htmlFor="desgenitourinario">
                    {" "}
                    Descripción Genitourinario{" "}
                  </label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <Dropdown
                    id="Endocrino_inmunologico"
                    options={revision_sistema}
                    value={endocrinoinmunologico}
                    onChange={(e) => setEndocrinoInmunologico(e.value)}
                    optionLabel="name"
                  ></Dropdown>
                  <label htmlFor="Endocrino_inmunologico">
                    Endocrino-inmunológico{" "}
                  </label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <AutoComplete
                    id="desendocrinoinmunologico"
                    value={desendocrinoinmunologico}
                    onChange={(e) => setDesEndocrinoInmunologico(e.value)}
                    suggestions={filteredCountries}
                    completeMethod={searchCountry}
                    field="name"
                  ></AutoComplete>
                  <label htmlFor="desendocrinoinmunologico">
                    {" "}
                    Descripción Endocrino-inmunológico{" "}
                  </label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <Dropdown
                    id="pielanexos"
                    options={revision_sistema}
                    value={pielanexos}
                    onChange={(e) => setPielAnexos(e.value)}
                    optionLabel="name"
                  ></Dropdown>
                  <label htmlFor="pielanexos">Piel y anexos </label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <AutoComplete
                    id="autocomplete"
                    value={despielanexos}
                    onChange={(e) => setDesPielAnexos(e.value)}
                    suggestions={filteredCountries}
                    completeMethod={searchCountry}
                    field="name"
                  ></AutoComplete>
                  <label htmlFor="autocomplete">
                    {" "}
                    Descripción Piel y Anexos
                  </label>
                </span>
              </div>
              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <AutoComplete
                    id="menarquia"
                    value={menarquia}
                    onChange={(e) => setMenarquia(e.value)}
                    suggestions={filteredCountries}
                    completeMethod={searchCountry}
                    field="name"
                  ></AutoComplete>
                  <label htmlFor="menarquia"> Menarquia</label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <AutoComplete
                    id="gestas"
                    value={gestas}
                    onChange={(e) => setGestas(e.value)}
                    suggestions={filteredCountries}
                    completeMethod={searchCountry}
                    field="name"
                  ></AutoComplete>
                  <label htmlFor="gestas"> Gestas</label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <AutoComplete
                    id="planificacion"
                    value={planificacion}
                    onChange={(e) => setPlanificacion(e.value)}
                    suggestions={filteredCountries}
                    completeMethod={searchCountry}
                    field="name"
                  ></AutoComplete>
                  <label htmlFor="planificacion"> Planificación</label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <AutoComplete
                    id="autocomplete"
                    value={parto}
                    onChange={(e) => setParto(e.value)}
                    suggestions={filteredCountries}
                    completeMethod={searchCountry}
                    field="name"
                  ></AutoComplete>
                  <label htmlFor="autocomplete"> Parto</label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <AutoComplete
                    id="autocomplete"
                    value={ciclo}
                    onChange={(e) => setCiclo(e.value)}
                    suggestions={filteredCountries}
                    completeMethod={searchCountry}
                    field="name"
                  ></AutoComplete>
                  <label htmlFor="autocomplete"> Ciclo</label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <AutoComplete
                    id="autocomplete"
                    value={cesarea}
                    onChange={(e) => setCesarea(e.value)}
                    suggestions={filteredCountries}
                    completeMethod={searchCountry}
                    field="name"
                  ></AutoComplete>
                  <label htmlFor="autocomplete"> Cesarea</label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <AutoComplete
                    id="autocomplete"
                    value={fum}
                    onChange={(e) => setFUM(e.value)}
                    suggestions={filteredCountries}
                    completeMethod={searchCountry}
                    field="name"
                  ></AutoComplete>
                  <label htmlFor="autocomplete"> FUM</label>
                </span>
              </div>

              <div className="field col-12 md:col-3">
                <span className="p-float-label">
                  <AutoComplete
                    id="autocomplete"
                    value={aborto}
                    onChange={(e) => setAborto(e.value)}
                    suggestions={filteredCountries}
                    completeMethod={searchCountry}
                    field="name"
                  ></AutoComplete>
                  <label htmlFor="autocomplete"> Aborto</label>
                </span>
              </div>

              <div className="card">
                <h5> Examen Físico</h5>
                <div className="grid p-fluid mt-3">
                  <div className="field col-12 md:col-3">
                    <h5>Tension Arterial</h5>
                    <InputNumber
                      value={ta}
                      onValueChange={(e) => setTA(e.value ?? null)}
                      showButtons
                      mode="decimal"
                    ></InputNumber>
                  </div>

                  <div className="field col-12 md:col-3">
                    <h5>PESO</h5>
                    <InputNumber
                      value={ta}
                      onValueChange={(e) => setTA(e.value ?? null)}
                      showButtons
                      mode="decimal"
                    ></InputNumber>
                  </div>

                  <div className="field col-12 md:col-3">
                    <h5>FC</h5>
                    <InputNumber
                      value={ta}
                      onValueChange={(e) => setTA(e.value ?? null)}
                      showButtons
                      mode="decimal"
                    ></InputNumber>
                  </div>

                  <div className="field col-12 md:col-3">
                    <h5>TALLA</h5>
                    <InputNumber
                      value={ta}
                      onValueChange={(e) => setTA(e.value ?? null)}
                      showButtons
                      mode="decimal"
                    ></InputNumber>
                  </div>

                  <div className="field col-12 md:col-3">
                    <h5>FR</h5>
                    <InputNumber
                      value={ta}
                      onValueChange={(e) => setTA(e.value ?? null)}
                      showButtons
                      mode="decimal"
                    ></InputNumber>
                  </div>

                  <div className="field col-12 md:col-3">
                    <h5>T</h5>
                    <InputNumber
                      value={ta}
                      onValueChange={(e) => setTA(e.value ?? null)}
                      showButtons
                      mode="decimal"
                    ></InputNumber>
                  </div>

                  <div className="field col-12 md:col-3">
                    <h5>Saturación Oxigeno</h5>
                    <InputNumber
                      value={ta}
                      onValueChange={(e) => setTA(e.value ?? null)}
                      showButtons
                      mode="decimal"
                    ></InputNumber>
                  </div>

                  <div className="field col-12 md:col-3">
                    <span className="p-float-label"></span>
                  </div>

                  <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                      <Dropdown
                        id="pielanexos"
                        options={revision_sistema}
                        value={pielanexos}
                        onChange={(e) => setPielAnexos(e.value)}
                        optionLabel="name"
                      ></Dropdown>
                      <label htmlFor="pielanexos">Cabeza y Cuello </label>
                    </span>
                  </div>

                  <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                      <AutoComplete
                        id="autocomplete"
                        value={despielanexos}
                        onChange={(e) => setDesPielAnexos(e.value)}
                        suggestions={filteredCountries}
                        completeMethod={searchCountry}
                        field="name"
                      ></AutoComplete>
                      <label htmlFor="autocomplete">
                        {" "}
                        Descripción Cabeza y Cuello
                      </label>
                    </span>
                  </div>
                  <div className="card">
                    <div className="grid">
                      <div className="field col-12 md:col-3">
                        <span className="p-float-label">
                          <AutoComplete
                            id="autocomplete"
                            value={despielanexos}
                            onChange={(e) => setDesPielAnexos(e.value)}
                            suggestions={filteredCountries}
                            completeMethod={searchCountry}
                            field="name"
                          ></AutoComplete>
                          <label htmlFor="autocomplete"> Pull Test </label>
                        </span>
                      </div>

                      <div className="field col-12 md:col-3">
                        <span className="p-float-label">
                          <Dropdown
                            id="pielanexos"
                            options={revision_sistema}
                            value={pielanexos}
                            onChange={(e) => setPielAnexos(e.value)}
                            optionLabel="name"
                          ></Dropdown>
                          <label htmlFor="pielanexos">Cardiopulmonar </label>
                        </span>
                      </div>

                      <div className="field col-12 md:col-3">
                        <span className="p-float-label">
                          <AutoComplete
                            id="autocomplete"
                            value={despielanexos}
                            onChange={(e) => setDesPielAnexos(e.value)}
                            suggestions={filteredCountries}
                            completeMethod={searchCountry}
                            field="name"
                          ></AutoComplete>
                          <label htmlFor="autocomplete">
                            {" "}
                            Descripción Cardiopulomonar{" "}
                          </label>
                        </span>
                      </div>

                      <div className="field col-12 md:col-3">
                        <span className="p-float-label"></span>
                      </div>

                      <div className="field col-12 md:col-3">
                        <span className="p-float-label">
                          <Dropdown
                            id="pielanexos"
                            options={revision_sistema}
                            value={pielanexos}
                            onChange={(e) => setPielAnexos(e.value)}
                            optionLabel="name"
                          ></Dropdown>
                          <label htmlFor="pielanexos">Abdomen </label>
                        </span>
                      </div>

                      <div className="field col-12 md:col-3">
                        <span className="p-float-label">
                          <AutoComplete
                            id="autocomplete"
                            value={despielanexos}
                            onChange={(e) => setDesPielAnexos(e.value)}
                            suggestions={filteredCountries}
                            completeMethod={searchCountry}
                            field="name"
                          ></AutoComplete>
                          <label htmlFor="autocomplete">
                            {" "}
                            Descripcion Adbdomen{" "}
                          </label>
                        </span>
                      </div>

                      <div className="field col-12 md:col-3">
                        <span className="p-float-label">
                          <Dropdown
                            id="pielanexos"
                            options={revision_sistema}
                            value={pielanexos}
                            onChange={(e) => setPielAnexos(e.value)}
                            optionLabel="name"
                          ></Dropdown>
                          <label htmlFor="pielanexos">Extremedidades </label>
                        </span>
                      </div>

                      <div className="field col-12 md:col-3">
                        <span className="p-float-label">
                          <AutoComplete
                            id="autocomplete"
                            value={despielanexos}
                            onChange={(e) => setDesPielAnexos(e.value)}
                            suggestions={filteredCountries}
                            completeMethod={searchCountry}
                            field="name"
                          ></AutoComplete>
                          <label htmlFor="autocomplete">
                            {" "}
                            Descripción Extremidades{" "}
                          </label>
                        </span>
                      </div>

                      <div className="field col-12 md:col-3">
                        <span className="p-float-label">
                          <Dropdown
                            id="pielanexos"
                            options={revision_sistema}
                            value={pielanexos}
                            onChange={(e) => setPielAnexos(e.value)}
                            optionLabel="name"
                          ></Dropdown>
                          <label htmlFor="pielanexos">Neurológico </label>
                        </span>
                      </div>

                      <div className="field col-12 md:col-3">
                        <span className="p-float-label">
                          <AutoComplete
                            id="autocomplete"
                            value={despielanexos}
                            onChange={(e) => setDesPielAnexos(e.value)}
                            suggestions={filteredCountries}
                            completeMethod={searchCountry}
                            field="name"
                          ></AutoComplete>
                          <label htmlFor="autocomplete">
                            {" "}
                            Descripción Neurológico{" "}
                          </label>
                        </span>
                      </div>

                      <div className="field col-12 md:col-3">
                        <span className="p-float-label">
                          <Dropdown
                            id="pielanexos"
                            options={revision_sistema}
                            value={pielanexos}
                            onChange={(e) => setPielAnexos(e.value)}
                            optionLabel="name"
                          ></Dropdown>
                          <label htmlFor="pielanexos">Genital </label>
                        </span>
                      </div>

                      <div className="field col-12 md:col-3">
                        <span className="p-float-label">
                          <AutoComplete
                            id="autocomplete"
                            value={despielanexos}
                            onChange={(e) => setDesPielAnexos(e.value)}
                            suggestions={filteredCountries}
                            completeMethod={searchCountry}
                            field="name"
                          ></AutoComplete>
                          <label htmlFor="autocomplete">
                            {" "}
                            Descripción Genital{" "}
                          </label>
                        </span>
                      </div>
                      <div className="field col-12 md:col-3">
                        <span className="p-float-label">
                          <Dropdown
                            id="zona"
                            options={alopecia}
                            value={alopecias}
                            onChange={(e) => setAlopecias(e.value)}
                            optionLabel="name"
                          ></Dropdown>
                          <label htmlFor="zona">Escala de Alopecias</label>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="grid">
                      <div className="field col-12 md:col-3">
                        <h5>Diagnostico Cie 10</h5>
                        <AutoComplete
                          placeholder="Search"
                          id="dd"
                          dropdown
                          multiple
                          value={selectedAutoValue}
                          onChange={(e) => setSelectedAutoValue(e.value)}
                          suggestions={autoFilteredValue}
                          completeMethod={searchCountry}
                          field="name"
                        />
                      </div>

                      <div className="field col-12 md:col-3">
                        <h5>Observaciones</h5>
                        <InputTextarea
                          placeholder="Your Message"
                          autoResize
                          rows={3}
                          cols={30}
                        />
                      </div>

                      <div className="field col-12 md:col-3"></div>

                      <div className="field col-12 md:col-3"></div>

                      <div className="field col-12 md:col-3">
                        <span className="p-float-label">
                          <Dropdown
                            id="zona"
                            options={dx1}
                            value={dx1}
                            onChange={(e) => setAlopecias(e.value)}
                            optionLabel="name"
                          ></Dropdown>
                          <label htmlFor="zona">DX1</label>
                        </span>
                      </div>
                      <div className="field col-12 md:col-3">
                        <span className="p-float-label">
                          <Dropdown
                            id="zona"
                            options={dx1}
                            value={dx1}
                            onChange={(e) => setAlopecias(e.value)}
                            optionLabel="name"
                          ></Dropdown>
                          <label htmlFor="zona">DX2</label>
                        </span>
                      </div>

                      <div className="field col-12 md:col-3">
                        <span className="p-float-label">
                          <Dropdown
                            id="zona"
                            options={alopecia}
                            value={alopecias}
                            onChange={(e) => setAlopecias(e.value)}
                            optionLabel="name"
                          ></Dropdown>
                          <label htmlFor="zona">DX3</label>
                        </span>
                      </div>

                      <div className="field col-12 md:col-3">
                        <span className="p-float-label">
                          <Dropdown
                            id="zona"
                            options={alopecia}
                            value={alopecias}
                            onChange={(e) => setAlopecias(e.value)}
                            optionLabel="name"
                          ></Dropdown>
                          <label htmlFor="zona">DX4</label>
                        </span>
                      </div>

                      <div className="field col-12 md:col-3">
                        <span className="p-float-label">
                          <Dropdown
                            id="zona"
                            options={alopecia}
                            value={alopecias}
                            onChange={(e) => setAlopecias(e.value)}
                            optionLabel="name"
                          ></Dropdown>
                          <label htmlFor="zona">DX5</label>
                        </span>
                      </div>

                      <div className="field col-12 md:col-3">
                        <span className="p-float-label">
                          <Dropdown
                            id="zona"
                            options={alopecia}
                            value={alopecias}
                            onChange={(e) => setAlopecias(e.value)}
                            optionLabel="name"
                          ></Dropdown>
                          <label htmlFor="zona">DX5</label>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="grid">
                      <div className="field col-12 md:col-3">
                        <h5>Tratamiento</h5>
                        <InputTextarea
                          placeholder="Your Message"
                          autoResize
                          rows={3}
                          cols={30}
                        />
                      </div>

                      <div className="field col-12 md:col-3">
                        <h5>Observaciones</h5>
                        <InputTextarea
                          placeholder="Your Message"
                          autoResize
                          rows={3}
                          cols={30}
                        />
                      </div>

                      <div className="field col-12 md:col-3">
                        <h5>Aux Enfemeria</h5>
                        <span className="p-float-label">
                          <AutoComplete
                            id="autocomplete"
                            value={despielanexos}
                            onChange={(e) => setDesPielAnexos(e.value)}
                            suggestions={filteredCountries}
                            completeMethod={searchCountry}
                            field="name"
                          ></AutoComplete>
                          <label htmlFor="autocomplete">
                            {" "}
                            AUx de Enfermeria
                          </label>
                        </span>
                      </div>

                      <div className="field col-12 md:col-3">
                        <h5>Medico</h5>
                        <span className="p-float-label">
                          <AutoComplete
                            id="autocomplete"
                            value={despielanexos}
                            onChange={(e) => setDesPielAnexos(e.value)}
                            suggestions={filteredCountries}
                            completeMethod={searchCountry}
                            field="name"
                          ></AutoComplete>
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
                  <h2>Opcipital</h2>
                </div>

                <div className="field col-12 md:col-2">
                  <h6>Densidad Existente Centimetro Cuadrado</h6>
                  <InputNumber
                    value={densidadexistenteoccipital}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
                </div>

                <div className="field col-12 md:col-2">
                  <h6>Densidad Restante</h6>
                  <InputNumber
                    value={densidarestanteOccipital}
                    onValueChange={(e) =>
                      setDensidadRestanteoccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
                </div>

                <div className="field col-12 md:col-2">
                  <h6>Area A CM</h6>
                  <InputNumber
                    value={area1occipital}
                    onValueChange={(e) => setArea1Occipital(e.value ?? null)}
                    showButtons
                    mode="decimal"
                  ></InputNumber>
                </div>

                <div className="field col-12 md:col-2">
                  <h6>Area B CM</h6>
                  <InputNumber
                    value={area2ccipital}
                    onValueChange={(e) => setArea2Occipital(e.value ?? null)}
                    showButtons
                    mode="decimal"
                  ></InputNumber>
                </div>

                <div className="field col-12 md:col-2">
                  <h6>Area Total (areaa*areab)</h6>
                  <InputNumber
                    value={areatotaloccipital}
                    onValueChange={(e) =>
                      setAreaTotalOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
                </div>

                <div className="field col-12 md:col-2">
                  <h6>Area Foliculos =  area total x promedio del a densidad existente,   occipital mas temporal</h6>
                  <InputNumber value={numerofoliculosoccipital}
                    onValueChange={(e) =>
                      setFoliculosOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="grid p-fluid mt-2">
                <div className="field col-12 md:col-2">
                  <h2>Temporal</h2>
                </div>

                <div className="field col-12 md:col-2">
                  <h6>Densidad Existente</h6>
                  <InputNumber
                    value={densidadexistenteoccipital}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
                </div>

                <div className="field col-12 md:col-2">
                  <h6>Densidad Restante</h6>
                  <InputNumber
                    value={densidarestanteOccipital}
                    onValueChange={(e) =>
                      setDensidadRestanteoccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
                </div>

                <div className="field col-12 md:col-2">
                  <h6>Area A</h6>
                  <InputNumber
                    value={area1occipital}
                    onValueChange={(e) => setArea1Occipital(e.value ?? null)}
                    showButtons
                    mode="decimal"
                  ></InputNumber>
                </div>

                <div className="field col-12 md:col-2">
                  <h6>Area B</h6>
                  <InputNumber
                    value={area2ccipital}
                    onValueChange={(e) => setArea2Occipital(e.value ?? null)}
                    showButtons
                    mode="decimal"
                  ></InputNumber>
                </div>

                <div className="field col-12 md:col-2">
                  <h6>Area Total</h6>
                  <InputNumber
                    value={areatotaloccipital}
                    onValueChange={(e) =>
                      setAreaTotalOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
                </div>

                <div className="field col-12 md:col-2">
                  <h6>Area Foliculos</h6>
                  <InputNumber
                    value={numerofoliculosoccipital}
                    onValueChange={(e) =>
                      setFoliculosOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
                </div>

                <div className="field col-12 md:col-2">
                  <h6>Promedio</h6>
                  <InputNumber
                    value={numerofoliculosoccipital}
                    onValueChange={(e) =>
                      setFoliculosOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                    buttonLayout="vertical"
                    style={{ width: "6em" }}
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                  ></InputNumber>
                </div>

                <div className="field col-12 md:col-2">
                  <h6>Pelo a donar</h6>
                  <InputNumber
                    value={numerofoliculosoccipital}
                    onValueChange={(e) =>
                      setFoliculosOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                    buttonLayout="vertical"
                    style={{ width: "6em" }}
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                  ></InputNumber>
                </div>

                <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                    <h5>Observaciones:</h5>
                    <InputTextarea placeholder="Tus Observaciones" autoResize rows={3} cols={30} />
                    </div>

              </div>
            </div>

            <div className="card">
              <div className="grid p-fluid mt-2">
                <h2>Capilar : </h2> 

              <h4>Zona A:</h4>

             <div className="field col-12 md:col-2">
                <h6>Objetivo de densidad promedio</h6>
              <InputNumber
              
                    value={objetivodensidadpromedio}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>
               
               <div className="field col-12 md:col-2">
                </div>
                <div className="field col-12 md:col-2">
                </div>
                <div className="field col-12 md:col-2">
                </div>
                <div className="field col-12 md:col-2">
                </div>


               <div className="field col-12 md:col-2">
                  <h6>DENSIDAD RESTANTE</h6>
              <InputNumber
                    value={zonaadensidadrestante}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                 <div className="field col-12 md:col-2">
                  <h7>AREA ZONA A</h7>
              <InputNumber
                    value={zonaaareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                <div className="field col-12 md:col-2">
                  <h7>AREA ZONA B</h7>
              <InputNumber
                    value={zonaabareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>ÁREA TOTAL  areaa x areab x 3.14  /4 </h7>
              <InputNumber
                    value={zonaatotal}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>No. PELOS area total x densidad restante</h7>
              <InputNumber
                    value={zonaanumeropelos}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>




              </div>
            </div>


               <div className="card">
              <div className="grid p-fluid mt-2">
           
               
              <h4>Zona B:</h4>

             <div className="field col-12 md:col-2">
                <h6>DENSIDAD EXISTENTE  EN CENTIMETRO CUADRADO</h6>
              <InputNumber
              
                    value={zonaadensidaexistente}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h6>DENSIDAD RESTANTE</h6>
              <InputNumber
                    value={zonaadensidadrestante}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                 <div className="field col-12 md:col-2">
                  <h7>AREA ZONA A</h7>
              <InputNumber
                    value={zonaaareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                <div className="field col-12 md:col-2">
                  <h7>AREA ZONA B</h7>
              <InputNumber
                    value={zonaabareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>ÁREA TOTAL</h7>
              <InputNumber
                    value={zonaatotal}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>No. PELOS</h7>
              <InputNumber
                    value={zonaanumeropelos}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>




              </div>
            </div>

            <div className="card">
              <div className="grid p-fluid mt-2">
           
               
              <h4>Zona C:</h4>

             <div className="field col-12 md:col-2">
                <h6>DENSIDAD EXISTENTE</h6>
              <InputNumber
              
                    value={zonaadensidaexistente}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h6>DENSIDAD RESTANTE</h6>
              <InputNumber
                    value={zonaadensidadrestante}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                 <div className="field col-12 md:col-2">
                  <h7>AREA ZONA A</h7>
              <InputNumber
                    value={zonaaareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                <div className="field col-12 md:col-2">
                  <h7>AREA ZONA B</h7>
              <InputNumber
                    value={zonaabareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>ÁREA TOTAL</h7>
              <InputNumber
                    value={zonaatotal}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>No. PELOS</h7>
              <InputNumber
                    value={zonaanumeropelos}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>




              </div>
            </div>

            <div className="card">
              <div className="grid p-fluid mt-2">
           
               
              <h4>Linea Frontal:</h4>

             <div className="field col-12 md:col-2">
                <h6>DENSIDAD EXISTENTE</h6>
              <InputNumber
              
                    value={zonaadensidaexistente}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h6>DENSIDAD RESTANTE</h6>
              <InputNumber
                    value={zonaadensidadrestante}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                 <div className="field col-12 md:col-2">
                  <h7>AREA ZONA A</h7>
              <InputNumber
                    value={zonaaareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                <div className="field col-12 md:col-2">
                  <h7>AREA ZONA B</h7>
              <InputNumber
                    value={zonaabareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>ÁREA TOTAL</h7>
              <InputNumber
                    value={zonaatotal}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>No. PELOS</h7>
              <InputNumber
                    value={zonaanumeropelos}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>




              </div>
            </div>

            <div className="card">
              <div className="grid p-fluid mt-2">
           
               
              <h4>Entrada Derecha:</h4>

             <div className="field col-12 md:col-2">
                <h6>DENSIDAD EXISTENTE</h6>
              <InputNumber
              
                    value={zonaadensidaexistente}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h6>DENSIDAD RESTANTE</h6>
              <InputNumber
                    value={zonaadensidadrestante}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                 <div className="field col-12 md:col-2">
                  <h7>AREA ZONA A</h7>
              <InputNumber
                    value={zonaaareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                <div className="field col-12 md:col-2">
                  <h7>AREA ZONA B</h7>
              <InputNumber
                    value={zonaabareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>ÁREA TOTAL</h7>
              <InputNumber
                    value={zonaatotal}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>No. PELOS</h7>
              <InputNumber
                    value={zonaanumeropelos}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>




              </div>
            </div>

            <div className="card">
              <div className="grid p-fluid mt-2">
           
               
              <h4>Entrada izquierda:</h4>

             <div className="field col-12 md:col-2">
                <h6>DENSIDAD EXISTENTE</h6>
              <InputNumber
              
                    value={zonaadensidaexistente}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h6>DENSIDAD RESTANTE</h6>
              <InputNumber
                    value={zonaadensidadrestante}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                 <div className="field col-12 md:col-2">
                  <h7>AREA ZONA A</h7>
              <InputNumber
                    value={zonaaareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                <div className="field col-12 md:col-2">
                  <h7>AREA ZONA B</h7>
              <InputNumber
                    value={zonaabareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>ÁREA TOTAL</h7>
              <InputNumber
                    value={zonaatotal}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>No. PELOS</h7>
              <InputNumber
                    value={zonaanumeropelos}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>




              </div>
            </div>


             <div className="card">
              <div className="grid p-fluid mt-2">
           
               
              <h4>Lateral Derecho:</h4>

             <div className="field col-12 md:col-2">
                <h6>DENSIDAD EXISTENTE</h6>
              <InputNumber
              
                    value={zonaadensidaexistente}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h6>DENSIDAD RESTANTE</h6>
              <InputNumber
                    value={zonaadensidadrestante}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                 <div className="field col-12 md:col-2">
                  <h7>AREA ZONA A</h7>
              <InputNumber
                    value={zonaaareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                <div className="field col-12 md:col-2">
                  <h7>AREA ZONA B</h7>
              <InputNumber
                    value={zonaabareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>ÁREA TOTAL</h7>
              <InputNumber
                    value={zonaatotal}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>No. PELOS</h7>
              <InputNumber
                    value={zonaanumeropelos}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>




              </div>
            </div>

            <div className="card">
              <div className="grid p-fluid mt-2">
           
               
              <h4>Lateral Izquierdo:</h4>

             <div className="field col-12 md:col-2">
                <h6>DENSIDAD EXISTENTE</h6>
              <InputNumber
              
                    value={zonaadensidaexistente}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h6>DENSIDAD RESTANTE</h6>
              <InputNumber
                    value={zonaadensidadrestante}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                 <div className="field col-12 md:col-2">
                  <h7>AREA ZONA A</h7>
              <InputNumber
                    value={zonaaareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                <div className="field col-12 md:col-2">
                  <h7>AREA ZONA B</h7>
              <InputNumber
                    value={zonaabareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>ÁREA TOTAL</h7>
              <InputNumber
                    value={zonaatotal}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>No. PELOS</h7>
              <InputNumber
                    value={zonaanumeropelos}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>



              </div>
            </div>

  <div className="field col-12 md:col-2">
                  <h6>Numero Total de Pelos</h6>
                  <InputNumber
                    value={numerofoliculosoccipital}
                    onValueChange={(e) =>
                      setFoliculosOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                    buttonLayout="vertical"
                    style={{ width: "6em" }}
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                  ></InputNumber>
                </div>



<div className="col-12 mb-2 lg:col-4 lg:mb-0">
                    <h5>Observaciones:</h5>
                    <InputTextarea placeholder="Tus Observaciones" autoResize rows={3} cols={30} />
                    </div>



 <div className="card"> 
             
              <h1>Barba </h1>

              <div className="field col-12 md:col-2">
                  <h6>Densidad Existente Centimetro Cuadrado</h6>
                  <InputNumber
                    value={densidadexistenteoccipital}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
                </div>



                  <h2>Lateral Derecho</h2>
                 <div className="grid p-fluid mt-2">

                   <div className="field col-12 md:col-2">
                    
                <h6>DENSIDAD EXISTENTE </h6>
              <InputNumber
              
                    value={zonaadensidaexistente}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h6>DENSIDAD RESTANTE</h6>
              <InputNumber
                    value={zonaadensidadrestante}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                 <div className="field col-12 md:col-2">
                  <h7>AREA ZONA A</h7>
              <InputNumber
                    value={zonaaareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                <div className="field col-12 md:col-2">
                  <h7>AREA ZONA B</h7>
              <InputNumber
                    value={zonaabareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h7>ÁREA TOTAL</h7>
              <InputNumber
                    value={zonaatotal}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>No. PELOS</h7>
              <InputNumber
                    value={zonaanumeropelos}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>


               

              </div>
              </div>

              <div className="card"> 

              


                <h2>Lateral Izquierdo</h2>
                 <div className="grid p-fluid mt-2">

                   <div className="field col-12 md:col-2">
                    
                <h6>DENSIDAD EXISTENTE </h6>
              <InputNumber
              
                    value={zonaadensidaexistente}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h6>DENSIDAD RESTANTE</h6>
              <InputNumber
                    value={zonaadensidadrestante}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                 <div className="field col-12 md:col-2">
                  <h7>AREA ZONA A</h7>
              <InputNumber
                    value={zonaaareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                <div className="field col-12 md:col-2">
                  <h7>AREA ZONA B</h7>
              <InputNumber
                    value={zonaabareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h7>ÁREA TOTAL</h7>
              <InputNumber
                    value={zonaatotal}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>No. PELOS</h7>
              <InputNumber
                    value={zonaanumeropelos}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>
                </div>

                </div>


                 <div className="card"> 

              


                <h2>Candado Derecho</h2>
                 <div className="grid p-fluid mt-2">

                   <div className="field col-12 md:col-2">
                    
                <h6>DENSIDAD EXISTENTE </h6>
              <InputNumber
              
                    value={zonaadensidaexistente}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h6>DENSIDAD RESTANTE</h6>
              <InputNumber
                    value={zonaadensidadrestante}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                 <div className="field col-12 md:col-2">
                  <h7>AREA ZONA A</h7>
              <InputNumber
                    value={zonaaareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                <div className="field col-12 md:col-2">
                  <h7>AREA ZONA B</h7>
              <InputNumber
                    value={zonaabareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h7>ÁREA TOTAL</h7>
              <InputNumber
                    value={zonaatotal}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>No. PELOS</h7>
              <InputNumber
                    value={zonaanumeropelos}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>
                </div>

                </div>
                

                <div className="card"> 

              


                <h2>Candado Izquierdo</h2>
                 <div className="grid p-fluid mt-2">

                   <div className="field col-12 md:col-2">
                    
                <h6>DENSIDAD EXISTENTE </h6>
              <InputNumber
              
                    value={zonaadensidaexistente}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h6>DENSIDAD RESTANTE</h6>
              <InputNumber
                    value={zonaadensidadrestante}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                 <div className="field col-12 md:col-2">
                  <h7>AREA ZONA A</h7>
              <InputNumber
                    value={zonaaareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                <div className="field col-12 md:col-2">
                  <h7>AREA ZONA B</h7>
              <InputNumber
                    value={zonaabareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h7>ÁREA TOTAL</h7>
              <InputNumber
                    value={zonaatotal}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>No. PELOS</h7>
              <InputNumber
                    value={zonaanumeropelos}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>
                </div>

                </div>

                 <div className="card"> 

              


                <h2>Bigote</h2>
                 <div className="grid p-fluid mt-2">

                   <div className="field col-12 md:col-2">
                    
                <h6>DENSIDAD EXISTENTE </h6>
              <InputNumber
              
                    value={zonaadensidaexistente}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h6>DENSIDAD RESTANTE</h6>
              <InputNumber
                    value={zonaadensidadrestante}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                 <div className="field col-12 md:col-2">
                  <h7>AREA ZONA A</h7>
              <InputNumber
                    value={zonaaareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                <div className="field col-12 md:col-2">
                  <h7>AREA ZONA B</h7>
              <InputNumber
                    value={zonaabareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h7>ÁREA TOTAL</h7>
              <InputNumber
                    value={zonaatotal}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>No. PELOS</h7>
              <InputNumber
                    value={zonaanumeropelos}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>
                </div>

                </div>

                 <div className="card"> 

              


                <h2>Menton</h2>
                 <div className="grid p-fluid mt-2">

                   <div className="field col-12 md:col-2">
                    
                <h6>DENSIDAD EXISTENTE </h6>
              <InputNumber
              
                    value={zonaadensidaexistente}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h6>DENSIDAD RESTANTE</h6>
              <InputNumber
                    value={zonaadensidadrestante}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                 <div className="field col-12 md:col-2">
                  <h7>AREA ZONA A</h7>
              <InputNumber
                    value={zonaaareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                <div className="field col-12 md:col-2">
                  <h7>AREA ZONA B</h7>
              <InputNumber
                    value={zonaabareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h7>ÁREA TOTAL</h7>
              <InputNumber
                    value={zonaatotal}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>No. PELOS</h7>
              <InputNumber
                    value={zonaanumeropelos}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>
                </div>

                </div>

                 <div className="card"> 

              


                <h2>Medio Menton</h2>
                 <div className="grid p-fluid mt-2">

                   <div className="field col-12 md:col-2">
                    
                <h6>DENSIDAD EXISTENTE </h6>
              <InputNumber
              
                    value={zonaadensidaexistente}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h6>DENSIDAD RESTANTE</h6>
              <InputNumber
                    value={zonaadensidadrestante}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                 <div className="field col-12 md:col-2">
                  <h7>AREA ZONA A</h7>
              <InputNumber
                    value={zonaaareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                <div className="field col-12 md:col-2">
                  <h7>AREA ZONA B</h7>
              <InputNumber
                    value={zonaabareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h7>ÁREA TOTAL</h7>
              <InputNumber
                    value={zonaatotal}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>No. PELOS</h7>
              <InputNumber
                    value={zonaanumeropelos}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>
                </div>

                </div>
                

                <div className="card"> 


                <h2>Patilla Izquierda</h2>
                 <div className="grid p-fluid mt-2">

                   <div className="field col-12 md:col-2">
                    
                <h6>DENSIDAD EXISTENTE </h6>
              <InputNumber
              
                    value={zonaadensidaexistente}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h6>DENSIDAD RESTANTE</h6>
              <InputNumber
                    value={zonaadensidadrestante}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                 <div className="field col-12 md:col-2">
                  <h7>AREA ZONA A</h7>
              <InputNumber
                    value={zonaaareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                <div className="field col-12 md:col-2">
                  <h7>AREA ZONA B</h7>
              <InputNumber
                    value={zonaabareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h7>ÁREA TOTAL</h7>
              <InputNumber
                    value={zonaatotal}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>No. PELOS</h7>
              <InputNumber
                    value={zonaanumeropelos}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>
                </div>

                </div>

                <div className="card"> 


                <h2>Patilla Derecha</h2>
                 <div className="grid p-fluid mt-2">

                   <div className="field col-12 md:col-2">
                    
                <h6>DENSIDAD EXISTENTE </h6>
              <InputNumber
              
                    value={zonaadensidaexistente}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h6>DENSIDAD RESTANTE</h6>
              <InputNumber
                    value={zonaadensidadrestante}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                 <div className="field col-12 md:col-2">
                  <h7>AREA ZONA A</h7>
              <InputNumber
                    value={zonaaareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                <div className="field col-12 md:col-2">
                  <h7>AREA ZONA B</h7>
              <InputNumber
                    value={zonaabareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h7>ÁREA TOTAL</h7>
              <InputNumber
                    value={zonaatotal}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>No. PELOS</h7>
              <InputNumber
                    value={zonaanumeropelos}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>
                </div>

                </div>

                 <div className="field col-12 md:col-2">
                  <h6>Numero Total de Pelos</h6>
                  <InputNumber
                    value={numerofoliculosoccipital}
                    onValueChange={(e) =>
                      setFoliculosOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                    buttonLayout="vertical"
                    style={{ width: "6em" }}
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                  ></InputNumber>
                </div>

                <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                  <h5>Observaciones</h5>
                    <InputTextarea placeholder=" Tus Observaciones" autoResize rows={3} cols={30} />
                   </div>



                   


       <div className="card"> 
             
              <h1>Cejas </h1>

                  <div className="field col-12 md:col-2">
                  <h6>Objetivo de densidad promedio</h6>
                  <InputNumber
                    value={densidadexistenteoccipital}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
                   </div>



                  <h2>Ceja Izquierda</h2>
                 <div className="grid p-fluid mt-2">

                   <div className="field col-12 md:col-2">
                    
                <h6>DENSIDAD EXISTENTE </h6>
              <InputNumber
              
                    value={zonaadensidaexistente}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h6>DENSIDAD RESTANTE</h6>
              <InputNumber
                    value={zonaadensidadrestante}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                 <div className="field col-12 md:col-2">
                  <h7>AREA ZONA A</h7>
              <InputNumber
                    value={zonaaareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                <div className="field col-12 md:col-2">
                  <h7>AREA ZONA B</h7>
              <InputNumber
                    value={zonaabareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h7>ÁREA TOTAL</h7>
              <InputNumber
                    value={zonaatotal}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>No. PELOS</h7>
              <InputNumber
                    value={zonaanumeropelos}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

              </div>
              </div>

              <div className="card"> 


                <h2>Ceja Derecha</h2>
                 <div className="grid p-fluid mt-2">

                   <div className="field col-12 md:col-2">
                    
                <h6>DENSIDAD EXISTENTE </h6>
              <InputNumber
              
                    value={zonaadensidaexistente}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h6>DENSIDAD RESTANTE</h6>
              <InputNumber
                    value={zonaadensidadrestante}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                 <div className="field col-12 md:col-2">
                  <h7>AREA ZONA A</h7>
              <InputNumber
                    value={zonaaareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                <div className="field col-12 md:col-2">
                  <h7>AREA ZONA B</h7>
              <InputNumber
                    value={zonaabareasdensidad}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

               <div className="field col-12 md:col-2">
                  <h7>ÁREA TOTAL</h7>
              <InputNumber
                    value={zonaatotal}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>

                  <div className="field col-12 md:col-2">
                  <h7>No. PELOS</h7>
              <InputNumber
                    value={zonaanumeropelos}
                    onValueChange={(e) =>
                      setDensidadExistenteOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                  ></InputNumber>
               </div>



               

            


                

                 <div className="field col-12 md:col-2">
                  <h6>Numero Total de Pelos</h6>
                  <InputNumber
                    value={numerofoliculosoccipital}
                    onValueChange={(e) =>
                      setFoliculosOccipital(e.value ?? null)
                    }
                    showButtons
                    mode="decimal"
                    buttonLayout="vertical"
                    style={{ width: "6em" }}
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                  ></InputNumber>
                </div>

                <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                  <h5>Observaciones</h5>
                    <InputTextarea placeholder=" Tus Observaciones" autoResize rows={3} cols={30} />
                   </div>


                    <div className="col-12 mb-2 lg:col-4 lg:mb-0">
                    <h5>Sesiones</h5>
                    <Dropdown value={sesiones} onChange={(e) => setSesiones(e.value)} options={sesion} optionLabel="Sesión" placeholder="Select" />
                  </div>


                   </div>
                </div>



           
              

      

                  

        



                







          


          </AccordionTab>
          <AccordionTab header="Cotizacion">
            <p>
               <div className="card">
          <h5>Cotización</h5>
          <div className="grid"></div>
             
            <div className="field">
                        <label htmlFor="calculodefoliculos">Número de Folículos</label>
                        <InputText id="calculodefoliculos" type="text" />
                    </div>

                     <div className="field">
                        <label htmlFor="calculodefoliculosceja">Número de Folículos cejas</label>
                        <InputText id="calculodefoliculoscejas" type="text" />
                    </div>


                     <h5>Cejas</h5>


                     
<div className="flex flex-wrap gap-3">
    <div className="flex align-items-center">
        <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
        <label htmlFor="ingredient1" className="ml-2">Total</label>
    </div>
    <div className="flex align-items-center">
        <RadioButton inputId="ingredient2" name="pizza" value="Mushroom" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Mushroom'} />
        <label htmlFor="ingredient2" className="ml-2">Parcial</label>
    </div>
    <div className="flex align-items-center">
        <RadioButton inputId="ingredient3" name="pizza" value="Pepper" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Pepper'} />
        <label htmlFor="ingredient3" className="ml-2">No Aplica</label>
    </div>
   
</div>


 <h2>INSTRUCCIONES PREVIAS AL PROCEDIMIENTO</h2>

<h5>
1.NO fume 2 días antes del procedimiento. Evite ingerir bebidas alcohólicas 24 horas antes del procedimiento, Una semana antes del procedimiento NO tome Aspirina o cualquier medicamento que contenga Ácido Acetil Salicílico, vitaminas (especialmente vitamina E), Aloe, Ginseng, o cualquier suplemento nutricional. <br></br>
2.Continúe tomando sus medicamentos en las dosis usuales para la hipertensión arterial, para la diabetes o para cualquier otra enfermedad que necesite control con medicamentos. Debe presentar de forma obligatoria el resultado de los laboratorios solicitados para la realización del procedimiento <br></br>
3.Si se encuentra en tratamiento con Minoxidil, debe suspender su uso diez (10) días antes del procedimiento. Puede reiniciar su uso veinte (30) días después del procedimiento. <br></br>
4.Lave su cabello en la mañana del día del procedimiento, No realice ningún tipo de corte de cabello antes del procedimiento. El cabello blanco o las canas deben teñirse antes del procedimiento Tome un desayuno ligero, evite la cafeína, té, café y jugo de naranja el día del procedimiento, use una camisa que tenga botones el día del procedimiento para facilitar su postura, Se recomienda no conducir ningún tipo de vehículo posterior al procedimiento. <br></br>
Nota: Se explica al paciente la necesidad e importancia de la adherencia al tratamiento médico por vía oral, vía tópica, e inyectada. DHI Colombia y su personal médico queda totalmente exonerada del procedimiento de garantía y de los resultados del implante por incumplimiento de dicho tratamiento por parte del paciente.
En el caso de realizarse implante de retoque de 12 a 18 meses posterior al procedimiento, el paciente deberá cubrir el costo de los instrumentos. Dicho valor oscila entre $1.500.000 a $2.000.000. <br></br>
Confirmo que he leído y entendido las instrucciones del procedimiento implante directo de pelo y que me han informado todas las precauciones, los exámenes necesarios y los informes que tengo que presentar antes del procedimiento que estoy a punto de emprender. <br></br>

EN CASO DE IMPLANTE FORMULA MEDICA

SUSPENDER MINOXIDIL 10 DIAS ANTES DEL PROCEDIMIENTO Y RETOMAR 1 MES DESPUES

1.DOXICICLINA TABLETA 100MG. TOMAR 1 TABLETA CADA 12 HORAS POR 7 DIAS
2.DOLEX TABLETAS 500MG. EN CASO DE DOLOR 2 TAB CADA 8 HORAS POR 3 DIAS
3.GASTRICUMEELTABLE TAS. DOS TABLETAS SUBLINGUALES AL DIA EN AYUNAS DURANTE 5 DIAS
4.PREDNISOLONA TABLETAS 50mg.

PRIMER DIA: 1TAB DIARIA AM.
SEGUNDO DIA: 1TAB DIARIA AM.
TERCER DIA: 1 TAB DIARIA AM.
CUARTO DIA: 1 TAB DIARIA AM.
QUINTO DIA: 1 TAB DIARIA AM.

5. DRENAJE FACIAL (DESINFLAMATORIO)
6. SUERO TERAPIA CAPILAR. (DESINFLAMATORIO)</h5>




                    </div>
                    

            </p>
          </AccordionTab>

 <AccordionTab header="Nota Aclaratoria Medico">
            <p>
               <div className="card">
          <h5>Nota Aclaratoria Medico</h5>
          <div className="grid"></div>
             
           
        <InputTextarea autoResize value={notaaclaratoria} onChange={(e) => setNotaAclaratoria(e.target.value)} rows={5} cols={30} />

                    


                    </div>
                    

            </p>
          </AccordionTab>

          <AccordionTab header="Nota de Enfermeria - Lavado">
            <p>
               <div className="card">
          <h5>Nota Aclaratoria Enfermera Lavado</h5>
          <div className="grid"></div>
             
           
        <InputTextarea autoResize value={notaaclaratoriaenfermerialavado} onChange={(e) => setNotaAclaratoriaEnfermeriaLavado(e.target.value)} rows={5} cols={30} />

                    


                    </div>
                    

            </p>
          </AccordionTab>



          

          <AccordionTab header="Nota de  Foto Enfermeria">
            <p>
               <div className="card">
          <h5>Nota de Foto Enfermeria</h5>
          <div className="grid"></div>
             
           
        <InputTextarea autoResize value={notafotoenfermeria} onChange={(e) => setNotaFotoEnfermeria(e.target.value)} rows={5} cols={30} />

                    


                    </div>
                    

            </p>
          </AccordionTab>

           <AccordionTab header="Nota de Recepción">
            <p>
               <div className="card">
          <h5>Nota de Recepción</h5>
          <div className="grid"></div>
             
           
        <InputTextarea autoResize value={notarecepcion} onChange={(e) => setNotaRecepcion(e.target.value)} rows={5} cols={30} />

                    


                    </div>
                    

            </p>
          </AccordionTab>

           <AccordionTab header="NOTA ENFERMERIA">
            <p>
               <div className="card">
          <h5>NOTA ENFERMERIA</h5>
          <div className="grid"></div>
             
           
        <InputTextarea autoResize value={NOTAENFERMERIA} onChange={(e) => setNOTAENFERMERIA(e.target.value)} rows={5} cols={30} />

                    


                    </div>
                    

            </p>
          </AccordionTab>



           <AccordionTab header="Nota Enfermeria Implante Capilar">
            <p>
               <div className="card">




          <h3>Nota Enfermeria-Procedimiento</h3>
          <div className="grid"></div>
          <br></br>

              <h4>Dia de Procedimiento </h4>
          <Dropdown value={diaprocedimientoenfermeria} onChange={(e) => setDiaProcedimientoEnfermeria(e.value)} options={dia_procedimiento_enfermeria} optionLabel="name"  placeholder="Seleccona el dia" className="w-full md:w-14rem" />
             
             <br></br>

             <br></br>

              <h4>Implante </h4>
          <Dropdown value={implanteenfermeria} onChange={(e) => setImplanteEnfermeria(e.value)} options={implante_enfermeria} optionLabel="name"  placeholder="Seleccona el dia" className="w-full md:w-14rem" />
             
             <br></br>
           
        <InputTextarea autoResize value={notadeenfermeriaimplantecapilar} onChange={(e) => setNotaDeEnfermeriaImplanteCapilar(e.target.value)} rows={5} cols={30} />
                    
          <h4>No de sala de procedimientos  </h4>

        <div className="flex flex-wrap gap-3">
    <div className="flex align-items-center">
        <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
        <label htmlFor="ingredient1" className="ml-2">Sala 1 </label>
    </div>
    <div className="flex align-items-center">
        <RadioButton inputId="ingredient2" name="pizza" value="Mushroom" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Mushroom'} />
        <label htmlFor="ingredient2" className="ml-2">Sala 4 </label>
    </div>
    <div className="flex align-items-center">
        <RadioButton inputId="ingredient3" name="pizza" value="Pepper" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Pepper'} />
        <label htmlFor="ingredient3" className="ml-2">Sala 5</label>
    </div>
    <div className="flex align-items-center">
        <RadioButton inputId="ingredient4" name="pizza" value="Onion" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Onion'} />
        <label htmlFor="ingredient4" className="ml-2"> Sala 6  </label>
    </div>
</div>

                    </div>
                    

            </p>
          </AccordionTab>



           <AccordionTab header="Nota de Enfermeria - Drenajes">
            <p>
               <div className="card">
          <h5>NOTA  ENFERMERIA DRENAJES</h5>
          <div className="grid"></div>
             
           
        <InputTextarea autoResize value={notaenfermeriadrenaje} onChange={(e) => setNotaEnfermeriaDrenaje(e.target.value)} rows={5} cols={30} />

                    


                    </div>
                    

            </p>
          </AccordionTab>

           <AccordionTab header="Nota de Enfermeria Suero Terapia">
            <p>
               <div className="card">
          <h5>NOTA ENFERMERIA SUERO TERAPIA</h5>
          <div className="grid"></div>
             
           
        <InputTextarea autoResize value={notaenfermeriadrenaje} onChange={(e) => setNotaEnfermeriaDrenaje(e.target.value)} rows={5} cols={30} />

                    


                    </div>
                    

            </p>
          </AccordionTab>




           <AccordionTab header="Nota de Enfermeria Terapia Nuevo">
            <p>
               <div className="card">
          <h5>Nota de enfermería - Terapia </h5>
          <div className="grid"></div>
             
           
        <InputTextarea autoResize value={notaenfermeriadrenaje} onChange={(e) => setNotaEnfermeriaDrenaje(e.target.value)} rows={5} cols={30} />


<br></br> 

          
                    


                    </div>
                    <Dropdown value={terapias_enfermerias} onChange={(e) => setTerapiasEnfermeria (e.value)} options={terapias} optionLabel="name"  placeholder="Terapia" className="w-full md:w-14rem" />
                    

            </p>
          </AccordionTab>



        </Accordion>
      </div>
    </div>
  );
};

export default FloatLabelDemo;
