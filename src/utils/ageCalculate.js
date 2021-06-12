
export default function ageCalculate(birthDate) {
    return Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
}
