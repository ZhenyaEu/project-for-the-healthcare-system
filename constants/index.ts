export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Свідоцтво про народження",
  "Посвідчення водія",
  "Військлвий квиток",
  "Паспорт громадянина україни",
  "Закордонний паспорт",
  "Студентський квиток",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Іван Дяченко",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Лейла Коваленко",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Давід Лакіза",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Петро Чорний",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Яна Горобець",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Олексій Піянзін",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Жанна Серіцан",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Альона Круз",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Наталія Василенко",
  },
];

export const StatusIcon = {
  Заплановано: "/assets/icons/check.svg",
  Обробляється: "/assets/icons/pending.svg",
  Відхилено: "/assets/icons/cancelled.svg",
};
