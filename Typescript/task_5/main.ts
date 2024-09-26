interface MajorCredits {
    credits: number;
    brand: 'MajorCredits'
}

interface MinorCredits {
    credits: number;
    brand: 'MinorCredits'
}

function sumMajorCredtis(subject1: MajorCredits, subjetc2: MajorCredits): MajorCredits{
    return {
        credits: subject1.credits + subjetc2.credits,
        brand: 'MajorCredits'
    }
}

function sumMinorCredits (subject1: MinorCredits, subjetc2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subjetc2.credits,
        brand: 'MinorCredits'
    }
}