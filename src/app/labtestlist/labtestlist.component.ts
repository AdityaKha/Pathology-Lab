import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-labtestlist',
  templateUrl: './labtestlist.component.html',
  styleUrls: ['./labtestlist.component.css']
})
export class LabtestlistComponent implements OnInit {
 
  constructor(private route: ActivatedRoute) { }

  ngOnInit(){}
  searchedKeyword: string;

  filterResultDataSet = [{test:"Adenosine Deaminase (ADA)"},
  {test:"SGPT/ALT"},
  {test:"Albumin"},
  {test:"Alkaline Phosphatase"},
  {test:"Allergy: &nbsp;Garlic"},
  {test:"Calcium, 24 Hrs Urine"},
  {test:"Acute Hepatitis Marker Profile"},
  {test:"Acute Leukemia Diagnostic Panel"},
  {test:"Acute Leukemia Extended Panel"},
  {test:"All Chromosomal Diagnostic Panel"},
  {test:"Amenorrhoea Panel"},
  {test:"AML Prognostication Panel"},
  {test:"Deoxycorticosterone"},
  {test:"Aldosterone"},
  {test:"Androstenedione"},
  {test:"Aldosterone, 24 Hrs Urine"},
  {test:"Serum Cortisol"},
  {test:"Dehydroepiandrosterone(DHEA)"},
  {test:"Alkaline Phosphatase (ALP)"},
  {test:"Calcium"},
  {test:"Alpha 2 Macroglobulin"},
  {test:"Blood Urea"},
  {test:"Vitamin D Panel"},
  {test:"Alkaline Phosphatase Isoenzymes"},
  {test:"Apolipoprotein E (Apo E)"},
  {test:"Apolipoprotein B (Apo B)"},
  {test:"Lipoprotein (A)"},
  {test:"Total Cholestrol"},
  {test:"Triglycerides"},
  {test:"Troponin l, Rapid Card"},
  {test:"Creatinine"},
  {test:"Blood Urea Nitrogen (BUN)"},
  {test:"Cystatin C"},
  {test:"Citrate, 24 HRS Urine"},
  {test:"Phosphorus"},
  {test:"Uric Acid"},
  {test:"Ceruloplasmin"},
  {test:"Cholinesterase"},
  {test:"Amylase"},
  {test:"Lipase"},
  {test:"Thyroid Antibodies Panel"},
  {test:"Total T4 (Thyroxine)"},
  {test:"Glucose Challenge Test (GCT)"},
  {test:"Glucose/Sugar Fasting"},
  {test:"Zinc"},
  {test:"Zinc,Spot Urine"},
  {test:"Musk Antibody"},
  {test:"Acetylcholine Receptor Antibody"},
  {test:"Active Vitamin B12 (Holotranscobalmin)"},
  {test:"Vitamin B12/Cobalamin"}]
  ips(){
    if(document.getElementById("ib").style.display=="block")
    {
      document.getElementById("ib").style.display="none";
    }
    else
    document.getElementById("ib").style.display="block";
  }

}
