// ===============================
// TYPES
// ===============================

interface StudentSchedule {
    fullDays: string[];
    [day: string]: string[] | string;
}

type TimetableData = {
    [studentName: string]: StudentSchedule;
};

// ===============================
// TIMETABLE DATA
// ===============================

const timetableData: TimetableData = {
 "Aanchal Ajmera": { "fullDays": ["Monday", "Wednesday", "Friday"], "Monday": "09.00-11.30: DBSL-4CCE-A1 Lab, 14.00-15.00: PAO, 15.30-16.30: DBS", "Tuesday": "08.00-09.00: DAA, 09.00-10.00: OS, 10.30-11.30: IAI, 11.30-12.30: PAO", "Wednesday": "09.00-11.30: OSDL-4CCE-A2 Lab, 14.00-15.00: DBS, 15.30-16.30: DAA", "Thursday": "08.00-09.00: OS, 09.00-10.00: IAI, 10.30-11.30: PAO, 11.30-12.30: DBS", "Friday": "09.00-11.30: OSL-4CCE-A2 Lab, 14.00-15.00: DAA, 15.30-16.30: OS", "Saturday": "09.00-10.00: DBS, 10.30-11.30: DAA, 11.30-12.30: IAI" },
    "Aditya Khanna": { "fullDays": ["Monday", "Wednesday", "Friday"], "Monday": "08.30-12.30: OSDL-4IT-B2 / OSL-4IT-B1 Lab, 14.00-15.00: DAA, 15.30-16.30: DBS", "Tuesday": "08.00-09.00: DAA, 09.00-10.00: PAO, 10.30-11.30: IAI, 11.30-12.30: OS, 14.00-16.30: DBSL-4IT-B1 Lab", "Wednesday": "08.30-11.00: OSL-4IT-B2 Lab, 13.00-14.00: OS, 14.00-15.00: DBS, 15.30-16.30: DAA", "Thursday": "09.00-10.00: IAI, 10.30-11.30: PAO, 11.30-12.30: DBS, 14.00-17.00: OSDL-4IT-B1 Lab", "Friday": "08.30-11.00: DBSL-4IT-B2 Lab, 14.00-15.00: DAA, 15.30-16.30: PAO", "Saturday": "09.00-10.00: IAI, 10.30-11.30: DBS, 11.30-12.30: OS" },
    "Anirvin Shyam Iyer": { "fullDays": ["Monday", "Tuesday", "Saturday"], "Monday": "09.00-11.30: ESD Lab D1, 14.00-15.00: AIC, 15.30-16.30: VLSI", "Tuesday": "08.00-12.30: MCT, ME, EM-IV, DSP, 14.00-16.30: ESD Lab D2", "Wednesday": "14.00-15.00: VLSI, 15.30-16.30: ME", "Thursday": "08.00-12.30: EM-IV, DSP, AIC, VLSI", "Friday": "09.00-11.30: ESDP Lab D1, 14.00-15.00: EM-IV, 15.30-16.30: DSP", "Saturday": "08.00-12.30: AIC, VLSI, MCT, ME, 14.00-16.30: ESDP Lab D2" },
    "Anshul Das": { "fullDays": ["Monday", "Tuesday", "Thursday"], "Monday": "08.30-11.00: DBSL-4AIML-B1 Lab, 14.00-15.00: PAO, 15.30-16.30: DBS", "Tuesday": "08.00-09.00: DAA, 09.00-10.00: IAI, 10.30-11.30: OS, 11.30-12.30: PAO, 14.00-16.30: DBSL-4AIML-B2 Lab", "Wednesday": "09.00-11.30: OSDL-4AIML-B1 Lab, 14.00-15.00: DBS, 15.30-16.30: DAA", "Thursday": "09.00-10.00: OS, 10.30-11.30: PAO, 11.30-12.30: DBS, 14.00-16.30: OSDL-4AIML-B2 Lab", "Friday": "09.00-11.30: OSL-4AIML-B1 Lab, 14.00-15.00: DAA, 15.30-16.30: IAI", "Saturday": "08.00-09.00: OS, 09.00-10.00: DBS, 10.30-11.30: DAA" },
    "Arjun Mittal": { "fullDays": ["Wednesday", "Thursday", "Friday"], "Monday": "08.30-12.30: OSL-4IT-B1 Lab, 14.00-15.00: DAA, 15.30-16.30: DBS", "Tuesday": "08.00-09.00: DAA, 09.00-10.00: PAO, 10.30-11.30: IAI, 11.30-12.30: OS, 14.00-16.30: DBSL-4IT-B1 Lab", "Wednesday": "13.00-14.00: OS, 14.00-15.00: DBS, 15.30-16.30: DAA", "Thursday": "09.00-10.00: IAI, 10.30-11.30: PAO, 11.30-12.30: DBS, 14.00-17.00: OSDL-4IT-B1 Lab", "Friday": "14.00-15.00: DAA, 15.30-16.30: PAO", "Saturday": "09.00-10.00: IAI, 10.30-11.30: DBS, 11.30-12.30: OS" },
    "Arnav Bansal": { "fullDays": ["Monday", "Wednesday", "Thursday"], "Monday": "08.30-11.00: OSL-4AIML-C1 Lab, 14.00-15.00: OS, 15.30-16.30: DBS", "Tuesday": "08.00-09.00: DAA, 09.00-10.00: PAO, 10.30-11.30: OS, 11.30-12.30: IAI", "Wednesday": "08.30-11.00: DBSL-4AIML-C1 Lab, 14.00-15.00: DBS, 15.30-16.30: DAA", "Thursday": "08.00-09.00: PAO, 09.00-10.00: OS, 10.30-11.30: IAI, 11.30-12.30: DBS, 15.00-16.30: OSL-4AIML-C2 Lab", "Friday": "08.30-11.30: OSDL-4AIML-C1 Lab, 14.00-15.00: DAA, 15.30-16.30: PAO", "Saturday": "09.00-10.00: DBS, 10.30-11.30: DAA, 11.30-12.30: IAI" },
    "Arnav Gandotra": { "fullDays": ["Monday", "Tuesday", "Thursday"], "Monday": "10.00-12.30: DBSL-4CSE-B2 Lab, 14.00-15.00: OS, 15.30-16.30: DAA", "Tuesday": "09.00-10.00: IAI, 10.30-11.30: PAO, 11.30-12.30: OS, 14.00-16.30: OSL-4CSE-B2 Lab", "Wednesday": "10.00-12.30: OSDL-4CSE-B1 Lab, 13.00-14.00: OS, 14.00-15.00: DAA, 15.30-16.30: DBS", "Thursday": "08.00-09.00: IAI, 09.00-10.00: PAO, 10.30-11.30: DBS, 11.30-12.30: DAA, 14.00-16.30: DBSL-4CSE-B1 Lab", "Friday": "09.00-11.30: OSL-4CSE-B1 Lab, 14.00-15.00: DBS, 15.30-16.30: IAI", "Saturday": "08.00-09.00: PAO, 09.00-10.00: DAA, 10.30-11.30: DBS" },
    "Balhara Rishi": { "fullDays": ["Friday", "Saturday"], "Monday": "09.00-11.30: DBS LAB, 13.00-14.00: AS, 14.00-15.00: MLC, 15.30-16.30: DBS", "Tuesday": "08.00-10.00: AS & OS, 10.30-12.30: RA & MLC", "Wednesday": "13.00-15.00: VACV & DBS, 15.30-16.30: RA", "Thursday": "08.00-10.00: OS & AS, 10.30-12.30: RA & DBS", "Friday": "09.00-11.30: OS LAB, 14.00-16.30: VACV & OS", "Saturday": "09.00-11.30: DBS LAB, 13.00-16.30: DBS LAB" },
    "Devarapalli Chakradhar Reddy": { "fullDays": ["Tuesday", "Friday", "Saturday"], "Monday": "09.00-11.30: ESDP Lab C1, 13.00-14.00: VLSI, 14.00-15.00: AIC, 15.30-16.30: DSP", "Tuesday": "08.00-12.30: EM-IV, ME, MCT, VLSI, 14.00-16.30: ESDP Lab C2", "Wednesday": "14.00-15.00: EM-IV, 15.30-16.30: ME", "Thursday": "08.00-12.30: MCT, VLSI, AIC, DSP", "Friday": "09.00-11.30: ESD Lab C1, 14.00-15.00: MCT, 15.30-16.30: VLSI", "Saturday": "08.00-12.30: AIC, DSP, EM-IV, ME, 14.00-16.30: ESD Lab C2" },
    "Dheer Chandresh Vira": { "fullDays": ["Thursday", "Friday", "Saturday"], "Monday": "13.00-14.00: PSPOR, 14.00-15.00: AFE, 15.30-16.30: CB", "Tuesday": "08.00-12.30: SS, CB, AFE, PSPOR, 14.00-16.30: DT Lab", "Wednesday": "13.00-14.00: AFE, 14.00-15.00: SS, 15.30-16.30: DT Theory", "Thursday": "09.00-12.30: PSPOR, IF, AFE, 14.00-16.30: FT Lab", "Friday": "08.00-11.30: FT Lab, 14.00-15.00: IF, 15.30-16.30: PSPOR", "Saturday": "09.00-12.30: IF, SS, CB, 14.00-16.30: DT Lab" },
    "Drithi Namineni": { "fullDays": ["Monday", "Tuesday", "Thursday"], "Monday": "09.00-11.30: OSL-4DS-A1 Lab, 14.00-15.00: PAO, 15.30-16.30: DBS", "Tuesday": "09.00-10.00: IAI, 10.30-11.30: DAA, 11.30-12.30: PAO, 14.00-16.30: DBSL-4DS-A1 Lab", "Wednesday": "09.00-11.30: OSL-4DS-A2 Lab, 14.00-15.00: DBS, 15.30-16.30: OS", "Thursday": "08.00-09.00: IAI, 09.00-10.00: DAA, 10.30-11.30: PAO, 11.30-12.30: DBS, 14.00-16.30: OSDL-4DS-A1 Lab", "Friday": "09.00-11.30: DBSL-4DS-A2 Lab, 14.00-15.00: OS, 15.30-16.30: IAI", "Saturday": "08.00-09.00: DAA, 09.00-10.00: DBS, 10.30-11.30: OS" },
    "Gangwal Reina Manoj": { "fullDays": ["Monday", "Tuesday", "Thursday"], "Monday": "10.00-12.30: DBSL-4CSE-B2 Lab, 14.00-15.00: OS, 15.30-16.30: DAA", "Tuesday": "09.00-10.00: IAI, 10.30-11.30: PAO, 11.30-12.30: OS, 14.00-16.30: OSL-4CSE-B2 Lab", "Wednesday": "10.00-12.30: OSDL-4CSE-B1 Lab, 13.00-14.00: OS, 14.00-15.00: DAA, 15.30-16.30: DBS", "Thursday": "08.00-09.00: IAI, 09.00-10.00: PAO, 10.30-11.30: DBS, 11.30-12.30: DAA, 14.00-16.30: DBSL-4CSE-B1 Lab", "Friday": "09.00-11.30: OSL-4CSE-B1 Lab, 14.00-15.00: DBS, 15.30-16.30: IAI", "Saturday": "08.00-09.00: PAO, 09.00-10.00: DAA, 10.30-11.30: DBS" },
    "Kartikay Dubey": { "fullDays": ["Wednesday", "Thursday", "Friday"], "Monday": "09.00-11.30: OSL-4IT-A1 Lab, 14.00-15.00: PAO, 15.30-16.30: DBS", "Tuesday": "08.00-09.00: DAA, 09.00-10.00: OS, 10.30-11.30: IAI, 11.30-12.30: PAO", "Wednesday": "09.00-11.30: DBSL-4IT-A2 Lab, 14.00-15.00: DBS, 15.30-16.30: DAA", "Thursday": "09.00-10.00: OS, 10.30-11.30: PAO, 11.30-12.30: DBS, 14.00-16.30: OSL-4IT-A2 Lab", "Friday": "09.00-11.30: OSDL-4IT-A2 Lab, 14.00-15.00: DAA, 15.30-16.30: OS", "Saturday": "08.00-09.00: IAI, 09.00-10.00: DBS, 10.30-11.30: DAA" },
    "Kaustubha Saxena": { "fullDays": ["Monday", "Tuesday", "Thursday"], "Monday": "10.00-12.30: DBSL-4CCE-B2 Lab, 14.00-15.00: DAA, 15.30-16.30: DBS", "Tuesday": "08.00-12.30: PAO, IAI, OS, DAA, 14.00-16.30: OSL-4CCE-B2 Lab", "Wednesday": "09.00-11.30: DBSL-4CCE-B1 Lab, 13.00-14.00: DAA, 14.00-15.00: DBS, 15.30-16.30: PAO", "Thursday": "08.00-12.30: OS, IAI, DAA, DBS, 14.00-16.30: OSL-4CCE-B1 Lab", "Friday": "13.00-16.30: OSDL-4CCE-B2 Lab, IAI, OS", "Saturday": "09.00-11.30: DBS, PAO" },
    "Keshav Krishna Singh": { "fullDays": ["Tuesday", "Thursday", "Friday"], "Monday": "13.00-14.00: DAA, 14.00-15.00: DBS, 15.30-16.30: PAO", "Tuesday": "09.00-10.00: IAI, 10.30-11.30: OS, 11.30-12.30: PAO, 14.00-16.30: OSL-4IT-C1 Lab", "Wednesday": "14.00-15.00: DBS, 15.30-16.30: DAA", "Thursday": "08.00-09.00: IAI, 09.00-10.00: OS, 10.30-11.30: PAO, 11.30-12.30: DBS, 14.00-16.30: DBSL-4IT-C1 Lab", "Friday": "09.00-11.30: OSL-4IT-C2 Lab, 14.00-15.00: DAA, 15.30-16.30: IAI", "Saturday": "08.00-09.00: OS, 09.00-10.00: DBS, 10.30-11.30: DAA" },
    "Medhavi Jain": { "fullDays": ["Monday", "Tuesday", "Thursday"], "Monday": "08.30-11.00: DBSL-4AIML-B1 Lab, 14.00-15.00: PAO, 15.30-16.30: DBS", "Tuesday": "08.00-09.00: DAA, 09.00-10.00: IAI, 10.30-11.30: OS, 11.30-12.30: PAO, 14.00-16.30: DBSL-4AIML-B2 Lab", "Wednesday": "09.00-11.30: OSDL-4AIML-B1 Lab, 14.00-15.00: DBS, 15.30-16.30: DAA", "Thursday": "09.00-10.00: OS, 10.30-11.30: PAO, 11.30-12.30: DBS, 14.00-16.30: OSDL-4AIML-B2 Lab", "Friday": "09.00-11.30: OSL-4AIML-B1 Lab, 14.00-15.00: DAA, 15.30-16.30: IAI", "Saturday": "08.00-09.00: OS, 09.00-10.00: DBS, 10.30-11.30: DAA" },
    "Meenakshi S Nair": { "fullDays": ["Monday", "Tuesday", "Friday"], "Monday": "09.00-11.30: DBSL-4DS-B2 Lab, 13.00-14.00: DAA, 14.00-15.00: DBS, 15.30-16.30: PAO", "Tuesday": "08.00-09.00: IAI, 09.00-10.00: OS, 10.30-12.30: DBS, 14.00-16.30: OSL-4DS-B2 Lab", "Wednesday": "14.00-15.00: PAO, 15.30-16.30: IAI", "Thursday": "08.00-09.00: DAA, 09.00-10.00: OS, 10.30-11.30: DBS, 11.30-12.30: PAO, 14.00-15.30: DBSL-4DS-B1 Lab", "Friday": "09.00-11.30: OSL-4DS-B1 Lab, 14.00-15.00: IAI, 15.30-16.30: DAA", "Saturday": "09.00-10.00: DBS, 10.30-11.30: OS, 11.30-12.30: DAA" },
    "Mehul Singla": { "fullDays": ["Tuesday", "Thursday"], "Monday": "13.00-14.00: AP, 14.00-15.00: MAT IV, 15.30-16.30: IA", "Tuesday": "08.00-12.30: AAS, LCT, ABP, 14.00-16.30: A&P Lab B1", "Wednesday": "13.00-14.00: IA, 14.00-15.00: AAS, 15.30-16.30: LCT", "Thursday": "08.00-12.30: ABP, AP, MAT IV, IA, 14.00-16.30: NC Lab", "Friday": "09.00-11.30: A&P Lab B2, 14.00-15.00: ABP, 15.30-16.30: AP", "Saturday": "08.00-12.30: MAT IV, IA, AAS, LCT" },
    "Mohammed Mustafa Lokhandwala": { "fullDays": ["Monday", "Wednesday", "Friday"], "Monday": "08.30-11.00: OSL-4AIML-C1 / DBSL-4AIML-C2 Lab, 14.00-15.00: OS, 15.30-16.30: DBS", "Tuesday": "08.00-09.00: DAA, 09.00-10.00: PAO, 10.30-11.30: OS, 11.30-12.30: IAI", "Wednesday": "08.30-11.30: DBSL-4AIML-C1 Lab, 14.00-15.00: DBS, 15.30-16.30: DAA", "Thursday": "08.00-09.00: PAO, 09.00-10.00: OS, 10.30-11.30: IAI, 11.30-12.30: DBS", "Friday": "08.30-11.30: OSDL-4AIML-C1 Lab, 14.00-15.00: DAA, 15.30-16.30: PAO", "Saturday": "09.00-10.00: DBS, 10.30-11.30: DAA, 11.30-12.30: IAI" },
    "Mundra Vedant Rakesh": { "fullDays": ["Tuesday", "Thursday", "Friday"], "Monday": "13.00-14.00: DAA, 14.00-15.00: DBS, 15.30-16.30: PAO", "Tuesday": "09.00-10.00: IAI, 10.30-11.30: OS, 11.30-12.30: PAO, 14.00-16.30: OSL-4IT-C1 Lab", "Wednesday": "14.00-15.00: DBS, 15.30-16.30: DAA", "Thursday": "08.00-09.00: IAI, 09.00-10.00: OS, 10.30-11.30: PAO, 11.30-12.30: DBS, 14.00-16.30: DBSL-4IT-C1 Lab", "Friday": "09.00-11.30: OSL-4IT-C2 Lab, 14.00-15.00: DAA, 15.30-16.30: IAI", "Saturday": "08.00-09.00: OS, 09.00-10.00: DBS, 10.30-11.30: DAA" },
    "Pragati jain": { "fullDays": ["Monday", "Wednesday", "Friday"], "Monday": "09.00-11.30: ESD Lab C1, 13.00-14.00: VLSI, 14.00-15.00: AIC, 15.30-16.30: DSP", "Tuesday": "08.00-12.30: EM-IV, ME, MCT, VLSI, 14.00-16.30: ESDP Lab C2", "Wednesday": "14.00-15.00: EM-IV, 15.30-16.30: ME", "Thursday": "08.00-12.30: MCT, VLSI, AIC, DSP", "Friday": "09.00-11.30: ESD Lab C1, 14.00-15.00: MCT, 15.30-16.30: VLSI", "Saturday": "08.00-12.30: AIC, DSP, EM-IV, ME, 14.00-16.30: ESD Lab C2" },
    "Pranav Achanta": { "fullDays": ["Monday", "Tuesday", "Thursday"], "Monday": "09.00-11.30: DBSL-4DS-B2 Lab, 13.00-14.00: DAA, 14.00-15.00: DBS, 15.30-16.30: PAO", "Tuesday": "08.00-09.00: IAI, 09.00-10.00: OS, 10.30-12.30: DBS, 14.00-16.30: OSL-4DS-B2 Lab", "Wednesday": "14.00-15.00: PAO, 15.30-16.30: IAI", "Thursday": "08.00-09.00: DAA, 09.00-10.00: OS, 10.30-11.30: DBS, 11.30-12.30: PAO, 14.00-15.30: DBSL-4DS-B1 Lab", "Friday": "09.00-11.30: OSL-4DS-B1 Lab, 14.00-15.00: IAI, 15.30-16.30: DAA", "Saturday": "09.00-10.00: DBS, 10.30-11.30: OS, 11.30-12.30: DAA" },
    "Pranjay Mehtalia": { "fullDays": ["Thursday", "Friday", "Saturday"], "Monday": "08.30-12.30: OSDL-4IT-B2 / OSL-4IT-B1 Lab, 14.00-15.00: DAA, 15.30-16.30: DBS", "Tuesday": "08.00-09.00: DAA, 09.00-10.00: PAO, 10.30-11.30: IAI, 11.30-12.30: OS, 14.00-16.30: DBSL-4IT-B1 Lab", "Wednesday": "08.30-11.00: OSL-4IT-B2 Lab, 14.00-15.00: DBS, 15.30-16.30: DAA", "Thursday": "09.00-10.00: IAI, 10.30-11.30: PAO, 11.30-12.30: DBS, 14.00-17.00: OSDL-4IT-B1 Lab", "Friday": "08.30-11.00: DBSL-4IT-B2 Lab, 14.00-15.00: DAA, 15.30-16.30: PAO", "Saturday": "09.00-10.00: IAI, 10.30-11.30: DBS, 11.30-12.30: OS" },
    "Pranshu Bhale": { "fullDays": ["Tuesday", "Thursday", "Friday"], "Monday": "08.30-11.00: DBSL-4AIML-B1 / OSL-4AIML-B2 Lab, 14.00-15.00: PAO, 15.30-16.30: DBS", "Tuesday": "08.00-09.00: DAA, 09.00-10.00: IAI, 10.30-11.30: OS, 11.30-12.30: PAO, 14.00-16.30: DBSL-4AIML-B2 Lab", "Wednesday": "09.00-11.30: OSDL-4AIML-B1 Lab, 14.00-15.00: DBS, 15.30-16.30: DAA", "Thursday": "09.00-10.00: OS, 10.30-11.30: PAO, 11.30-12.30: DBS, 14.00-16.30: OSDL-4AIML-B2 Lab", "Friday": "09.00-11.30: OSL-4AIML-B1 Lab, 14.00-15.00: DAA, 15.30-16.30: IAI", "Saturday": "08.00-09.00: OS, 09.00-10.00: DBS, 10.30-11.30: DAA" },
    "Pratham Prabhakar": { "fullDays": ["Tuesday", "Thursday", "Friday"], "Monday": "09.00-11.00: OSL-4IT-D2 Lab, 14.00-15.00: OS, 15.30-16.30: DBS", "Tuesday": "08.00-09.00: DAA, 09.00-10.00: OS, 10.30-11.30: PAO, 14.00-16.30: OSDL-4IT-D1 Lab", "Wednesday": "09.00-11.00: DBSL-4IT-D2 Lab, 14.00-15.00: OS, 15.30-16.30: DBS", "Thursday": "08.00-09.00: DBS, 09.00-10.00: PAO, 10.30-11.30: IAI, 14.00-16.30: OSL-4IT-D1 Lab", "Friday": "08.30-11.30: DBSL-4IT-D1 Lab, 14.00-15.00: OS, 15.30-16.30: DAA", "Saturday": "08.00-09.00: PAO, 09.00-10.00: DAA, 10.30-11.30: DBS" },
    "Raj Gomani": { "fullDays": ["Monday", "Wednesday", "Friday"], "Monday": "09.00-11.30: DBSL-4CCE-A1 Lab, 14.00-15.00: PAO, 15.30-16.30: DBS", "Tuesday": "08.00-09.00: DAA, 09.00-10.00: OS, 10.30-11.30: IAI, 11.30-12.30: PAO", "Wednesday": "09.00-11.30: OSDL-4CCE-A2 Lab, 14.00-15.00: DBS, 15.30-16.30: DAA", "Thursday": "08.00-09.00: OS, 09.00-10.00: IAI, 10.30-11.30: PAO, 11.30-12.30: DBS", "Friday": "09.00-11.30: OSL-4CCE-A2 Lab, 14.00-15.00: DAA, 15.30-16.30: OS", "Saturday": "09.00-10.00: DBS, 10.30-11.30: DAA, 11.30-12.30: IAI" },
    "Regan Desouza": { "fullDays": ["Monday", "Friday"], "Monday": "08.00-10.30: EE Lab, 13.00-14.00: TE, 14.00-15.00: EM-IV, 15.30-16.30: BRCD", "Tuesday": "08.00-12.30: WWM, GE, WRE, TE, 14.00-16.30: EE Lab", "Wednesday": "14.00-15.00: WWM, 15.30-16.30: GE", "Thursday": "08.00-12.30: WRE, TE, EM-IV, BRCD, 15.00-16.30: SP", "Friday": "08.00-10.30: SP, 14.00-15.00: WRE, 15.30-16.30: TE", "Saturday": "08.00-12.30: EM-IV, BRCD, WWM, GE, 14.00-16.30: Site Visit" },
    "Rishit Singh": { "fullDays": ["Monday", "Wednesday", "Thursday"], "Monday": "08.30-12.30: ASD LAB / EM LAB, 13.00-14.00: LCT, 14.00-15.00: PE, 15.30-16.30: GTD", "Tuesday": "08.00-11.30: EM, ASD, MAT", "Wednesday": "14.00-16.30: EM, ASD", "Thursday": "08.00-12.30: MAT, LCT, PE, GTD, 14.00-16.30: ASD LAB / EM LAB", "Friday": "14.00-16.30: MAT, LCT", "Saturday": "08.00-12.30: PE, GTD, EM, ASD" },
    "Sankalp Arya": { "fullDays": ["Tuesday", "Wednesday", "Thursday"], "Monday": "10.00-12.30: OSL-4CSE-C1 Lab, 13.00-14.00: IAI, 14.00-15.00: PAO, 15.30-16.30: DBS", "Tuesday": "08.00-12.30: DBS, OS, DAA, PAO, 14.00-16.30: OSDL-4CSE-C2 Lab", "Wednesday": "09.00-11.30: DBSL-4CSE-C2 / OSDL-4CSE-C1 Lab, 13.00-14.00: DAA, 14.00-15.00: IAI, 15.30-16.30: DBS", "Thursday": "08.00-12.30: DAA, PAO, OS, 14.00-16.30: OSL-4CSE-C2 Lab", "Friday": "09.00-11.30: DBSL-4CSE-C1 Lab, 14.00-15.00: DBS, 15.30-16.30: OS", "Saturday": "09.00-12.30: DAA, IAI" },
    "Sheetal A Pai": { "fullDays": ["Tuesday", "Wednesday"], "Monday": "Lunch Break, 01.00-02.00: MC, 02.00-03.00: LIC, 03.30-04.30: CT", "Tuesday": "08.00-10.00: MAT-IV & II, 10.30-11.30: DSP, 11.30-12.30: MC, 03.00-04.30: AS Lab G3 / MC Lab G1", "Wednesday": "09.00-12.30: AS Lab G1, 02.00-03.00: MAT-IV, 03.30-04.30: II", "Thursday": "08.00-10.00: DSP & MC, 10.30-11.30: LIC, 11.30-12.30: CT, 03.00-04.30: AS Lab G2", "Friday": "08.00-12.30: MC Lab G2, 02.00-03.00: DSP, 03.30-04.30: MC", "Saturday": "08.00-10.00: LIC & CT, 10.30-11.30: MAT-IV, 11.30-12.30: II" },
    "Srijan Sharma": { "fullDays": ["Monday", "Wednesday", "Friday"], "Monday": "09.00-11.30: DBSL-4CCE-B2 / OSDL-4CCE-B1 Lab, 14.00-15.00: DAA, 15.30-16.30: DBS", "Tuesday": "08.00-12.30: PAO, IAI, OS, DAA", "Wednesday": "09.00-11.30: DBSL-4CCE-B1 / OSDL-4CCE-B2 Lab, 13.00-14.00: DAA, 14.00-15.00: DBS, 15.30-16.30: PAO", "Thursday": "08.00-12.30: OS, IAI, DAA, DBS, 14.00-16.30: OSL-4CCE-B1 Lab", "Friday": "09.00-11.30: OSDL-4CCE-B2 Lab, 14.00-15.00: IAI, 15.30-16.30: OS", "Saturday": "09.00-11.30: DBS, PAO" },
    "Sumay S Gaitonde": { "fullDays": ["Monday", "Tuesday"], "Monday": "09.00-11.30: DBS LAB, 13.00-14.00: AS, 14.00-15.00: MLC, 15.30-16.30: DBS", "Tuesday": "08.00-09.00: AS, 09.00-10.00: OS, 10.30-11.30: RA, 11.30-12.30: MLC, 14.00-16.30: OS LAB", "Wednesday": "13.00-14.00: VACV, 14.00-15.00: DBS, 15.30-16.30: RA", "Thursday": "08.00-09.00: OS, 09.00-10.00: AS, 10.30-11.30: RA, 11.30-12.30: DBS", "Friday": "09.00-11.30: OS LAB, 14.00-15.00: VACV, 15.30-16.30: OS", "Saturday": "08.00-09.00: MLC, 09.00-10.00: DBS, 10.30-11.30: VACV, 14.00-16.30: DBS LAB" },
    "Vivaan Bohra": { "fullDays": ["Tuesday", "Thursday"], "Monday": "Lunch Break, 01.00-02.00: MC, 02.00-03.00: LIC, 03.30-04.30: CT", "Tuesday": "08.00-10.00: MAT-IV & II, 10.30-11.30: DSP, 11.30-12.30: MC, 03.00-04.30: AS Lab G3 / MC Lab G1", "Wednesday": "09.00-12.30: AS Lab G1, 02.00-03.00: MAT-IV, 03.30-04.30: II", "Thursday": "08.00-10.00: DSP & MC, 10.30-11.30: LIC, 11.30-12.30: CT, 03.00-04.30: AS Lab G2", "Friday": "08.00-12.30: MC Lab G2, 02.00-03.00: DSP, 03.30-04.30: MC", "Saturday": "08.00-10.00: LIC & CT, 10.30-11.30: MAT-IV, 11.30-12.30: II" },
    "Yash Gupta": { "fullDays": ["Wednesday", "Thursday", "Friday"], "Monday": "09.00-11.30: OSDL-4CSE-D1 Lab, 14.00-15.00: OS, 15.30-16.30: DBS", "Tuesday": "08.00-09.00: DAA, 09.00-10.00: OS, 10.30-11.30: PAO, 11.30-12.30: IAI, 14.00-16.30: DBSL-4CSE-D2 Lab", "Wednesday": "09.00-11.30: OSL-4CSE-D1 Lab, 14.00-15.00: DBS, 15.30-16.30: DAA", "Thursday": "09.00-10.00: PAO, 10.30-11.30: DBS, 11.30-12.30: IAI, 14.00-16.30: OSDL-4CSE-D2 Lab", "Friday": "09.00-11.30: DBSL-4CSE-D1 Lab, 14.00-15.00: DAA, 15.30-16.30: OS", "Saturday": "08.00-09.00: PAO, 09.00-10.00: DBS, 10.30-11.30: DAA" },
    "Yashita Kotturi": { "fullDays": ["Monday", "Wednesday", "Thursday"], "Monday": "08.30-11.00: OSL-4AIML-C1 Lab, 14.00-15.00: OS, 15.30-16.30: DBS", "Tuesday": "08.00-09.00: DAA, 09.00-10.00: PAO, 10.30-11.30: OS, 11.30-12.30: IAI", "Wednesday": "08.30-11.30: DBSL-4AIML-C1 Lab, 14.00-15.00: DBS, 15.30-16.30: DAA", "Thursday": "08.00-09.00: PAO, 09.00-10.00: OS, 10.30-11.30: IAI, 11.30-12.30: DBS, 15.00-16.30: OSL-4AIML-C2 Lab", "Friday": "14.00-15.00: DAA, 15.30-16.30: PAO", "Saturday": "09.00-10.00: DBS, 10.30-11.30: DAA, 11.30-12.30: IAI" },
    "adarsh chand jain": { "fullDays": ["Monday", "Tuesday", "Thursday"], "Monday": "09.00-11.30: OSL-4DS-A1 Lab, 14.00-15.00: PAO, 15.30-16.30: DBS", "Tuesday": "09.00-10.00: IAI, 10.30-11.30: DAA, 11.30-12.30: PAO, 14.00-16.30: DBSL-4DS-A1 Lab", "Wednesday": "09.00-11.30: OSL-4DS-A2 Lab, 14.00-15.00: DBS, 15.30-16.30: OS", "Thursday": "08.00-09.00: IAI, 09.00-10.00: DAA, 10.30-11.30: PAO, 11.30-12.30: DBS, 14.00-16.30: OSDL-4DS-A1 Lab", "Friday": "09.00-11.30: DBSL-4DS-A2 Lab, 14.00-15.00: OS, 15.30-16.30: IAI", "Saturday": "08.00-09.00: DAA, 09.00-10.00: DBS, 10.30-11.30: OS" }
};

    

export { timetableData };

// ===============================
// MAIN SETUP FUNCTION
// ===============================
// ===============================
// GENERAL SLOT CONFIG
// ===============================

const GENERAL_SLOTS = [
    { start: "08.00", end: "09.00" },
    { start: "09.00", end: "10.00" },
    { start: "10.30", end: "11.30" },
    { start: "11.30", end: "12.30" },
    { start: "14.00", end: "15.00" },
    { start: "15.30", end: "16.30" }
];

const SPLIT_DAYS = ["Tuesday", "Thursday", "Saturday"];

function normalizeDaySchedule(day: string, scheduleText: string): string {

    if (!SPLIT_DAYS.includes(day)) {
        return scheduleText; // Do nothing for Mon/Wed/Fri
    }

    const entries = scheduleText.split(",").map(e => e.trim());
    const result: string[] = [];

    for (const entry of entries) {

        const match = entry.match(/(\d{2}\.\d{2})-(\d{2}\.\d{2}):\s*(.+)/);

        if (!match) {
            result.push(entry);
            continue;
        }

        const rangeStart = match[1];
        const rangeEnd = match[2];
        const subjects = match[3].split(/,|&/).map(s => s.trim());

        // If already exact 1-hour slot → keep it
        const isExactSlot = GENERAL_SLOTS.some(
            slot => slot.start === rangeStart && slot.end === rangeEnd
        );

        if (isExactSlot) {
            result.push(entry);
            continue;
        }

        // Split into valid slots
        const validSlots = GENERAL_SLOTS.filter(
            slot => slot.start >= rangeStart && slot.end <= rangeEnd
        );

        validSlots.forEach((slot, index) => {
            if (subjects[index]) {
                result.push(
                    `${slot.start}-${slot.end}: ${subjects[index]}`
                );
            }
        });
    }

    return result.join(", ");
}

export function setupTimetable(): void {

    // 🔐 Session Protection
    if (sessionStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "/";
        return;
    }

    // Display current user and role
    const currentUser = sessionStorage.getItem("currentUser") || "User";
    const userRole = sessionStorage.getItem("userRole") || "user";
    const userDisplay = document.getElementById("currentUser");
    
    if (userDisplay) {
        userDisplay.textContent = `${currentUser} (${userRole})`;
    }

    const dropdown = document.getElementById("ocName") as HTMLSelectElement;
    const daySelect = document.getElementById("day") as HTMLSelectElement;
    const resultDiv = document.getElementById("result") as HTMLElement;
    const checkBtn = document.getElementById("checkBtn") as HTMLButtonElement;
    const logoutBtn = document.getElementById("logoutBtn") as HTMLButtonElement;

    populateDropdown(dropdown);

    checkBtn.addEventListener("click", () => {
        showTimetable(dropdown, daySelect, resultDiv);
    });

    logoutBtn.addEventListener("click", logout);
}


// ===============================
// POPULATE DROPDOWN
// ===============================

function populateDropdown(dropdown: HTMLSelectElement): void {

    dropdown.innerHTML =
        '<option value="" disabled selected>Choose a student...</option>';

    Object.keys(timetableData)
        .sort()
        .forEach(name => {
            const option = document.createElement("option");
            option.value = name;
            option.textContent = name;
            dropdown.appendChild(option);
        });
}


// ===============================
// SHOW TIMETABLE
// ===============================

function showTimetable(
    dropdown: HTMLSelectElement,
    daySelect: HTMLSelectElement,
    resultDiv: HTMLElement
): void {

    const nameInput = dropdown.value;
    const day = daySelect.value;

    const student = timetableData[nameInput];

    if (!student) {
        resultDiv.innerHTML =
            `<span style="color:red;font-weight:bold;">
                Student name not found.
            </span>`;
        return;
    }

    const scheduleText = student[day] as string | undefined;
    const processedSchedule = scheduleText
    ? normalizeDaySchedule(day, scheduleText)
    : undefined;


    if (!scheduleText) {
        resultDiv.innerHTML =
            `<div class="schedule-card">
                No classes scheduled for ${day}.
            </div>`;
        return;
    }

   const sessions = processedSchedule
    ?.split(",")
    .map(s => s.trim()) || [];


    // Process each session to extract time and subject
    const timeSlots = sessions.map(session => {
        // Handle time range sessions: "09.00-11.30: Lab"
        const timeRangeMatch = session.match(/(\d{2}\.\d{2})-(\d{2}\.\d{2}):\s*(.+)/);
        if (timeRangeMatch) {
            const startTime = timeRangeMatch[1].replace('.', ':');
            const endTime = timeRangeMatch[2].replace('.', ':');
            const subject = timeRangeMatch[3].trim();
            const timeDisplay = `${startTime} - ${endTime}`;
            return { time: timeDisplay, subject };
        }
        
        // Handle single time sessions: "13.00-14.00: TE"
        const singleTimeMatch = session.match(/(\d{2}\.\d{2}):\s*(.+)/);
        if (singleTimeMatch) {
            const timeDisplay = `${singleTimeMatch[1].replace('.', ':')} - ${singleTimeMatch[2].replace('.', ':')}`;
            return { time: timeDisplay, subject: singleTimeMatch[3].trim() };
        }
        
        // Handle sessions without time: "DBS, PAO"
        else {
            return { time: '', subject: session.trim() };
        }
    }).filter((slot): slot is { time: string; subject: string } => slot !== null);

    // Create time slots with proper break handling
    const processedSlots: { time: string; subject: string }[] = [];
    let currentTime = 8; // Start from 8 AM
    
    timeSlots.forEach((slot: { time: string; subject: string }) => {
        if (slot.time.includes('-')) {
            // Time range session - add as is
            const subjects = slot.subject.split(',').map((s: string) => s.trim());
            subjects.forEach((subject) => {
                processedSlots.push({ time: slot.time, subject });
            });
            // Update current time to the end of this session
            const endTime = parseInt(slot.time.split('-')[1]);
            if (endTime > currentTime) {
                currentTime = endTime;
            }
        } else if (slot.time !== '') {
            // Subject without time - assign sequential slots
            const subjects = slot.subject.split(',').map((s: string) => s.trim());
            subjects.forEach((subject, index) => {
                // Simple sequential assignment: 8-9, 9-10, 10-11, 11-12, 12-1, 1-2, 2-3, 3-4
                const slotStart = currentTime + index;
                const slotEnd = slotStart + 1;
                const timeSlot = `${slotStart.toString().padStart(2, '0')}:00 - ${slotEnd.toString().padStart(2, '0')}`;
                processedSlots.push({ time: timeSlot, subject });
                currentTime++;
            });
        }
    });

    // Check if there's any lab in the schedule
    const hasLab = sessions.some(session => session.toLowerCase().includes('lab'));

    // Determine day type badge
    let dayTypeBadge = '';
    if (hasLab) {
        dayTypeBadge = '<div class="full-day-badge">Full Day With Lab</div>';
    } else if (timeSlots.length > 0) {
        dayTypeBadge = '<div class="half-day-badge">Half Day</div>';
    }

    if (processedSlots.length > 0) {
        const verticalSchedule = processedSlots
            .map(slot => `<div class="schedule-item">${slot.time} - ${slot.subject}</div>`)
            .join("");

        resultDiv.innerHTML = `
            <div class="schedule-card" style="margin-top:20px;">
                ${dayTypeBadge}
                <div style="font-size:18px;font-weight:600;color:#fff;">
                    ${nameInput}
                </div>
                <div class="vertical-list">
                    ${verticalSchedule}
                </div>
            </div>`;
    } else {
        resultDiv.innerHTML = `
            <div class="schedule-card" style="margin-top:20px;">
                <div style="font-size:18px;font-weight:600;color:#fff;">
                    ${nameInput}
                </div>
                <div class="schedule-item">No classes scheduled</div>
            </div>`;
    }
}


// ===============================
// LOGOUT
// ===============================

function logout(): void {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("userRole");
    localStorage.removeItem("isAutoLoggedIn");
    window.location.href = "/";
}
