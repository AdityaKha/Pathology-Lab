import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookatest',
  templateUrl: './bookatest.component.html',
  styleUrls: ['./bookatest.component.css']
})
export class BookatestComponent implements OnInit {
  constructor() { }

  sum:any=0;
  testname:any=[];
  cart:any=[];
  
atc(um:string,x:number){
    this.cart.push(x);
    this.testname.push(um);
    this.sum=this.sum+x;
  }
  buy(money:any){
this.sum=money;
document.getElementById("pm").style.display="block";
  }
  cancel(){
    document.getElementById("pm").style.display="none";
  this.sum=0;
  }
  ngOnInit(): void {}
    ff3:boolean=false;
    show(){
      if (this.ff3==true)
      {this.ff3=false;}
      else
      {this.ff3=true;}
  }
  ff4:boolean=false;
  show2(){
    if(this.ff4==true)
    {this.ff4=false;}
    else
    {this.ff4=true;}
  }
  ff5:boolean=false;
  show3(){
    if(this.ff5==true)
    {this.ff5=false;}
    else
    {this.ff5=true;}
  }
  tests(){
    if(document.getElementById("c1")!.style.display=="block")
    document.getElementById("c1")!.style.display="none";
    else
    {document.getElementById("c1")!.style.display="block";}
  }
  packagess(){
    if(document.getElementById("c2")!.style.display=="block")
    document.getElementById("c2")!.style.display="none";
    else
    {document.getElementById("c2")!.style.display="block";}
  }
  ags(){
    if(document.getElementById("c3")!.style.display=="block")
    document.getElementById("c3")!.style.display="none";
    else
    {document.getElementById("c3")!.style.display="block";}
  }
  bones(){
    if(document.getElementById("c4")!.style.display=="block")
    document.getElementById("c4")!.style.display="none";
    else
    {document.getElementById("c4")!.style.display="block";} 
  }
  hearts(){
    if(document.getElementById("c5")!.style.display=="block")
    document.getElementById("c5")!.style.display="none";
    else
    {document.getElementById("c5")!.style.display="block";}
  }
  kidneys(){
    if(document.getElementById("c6")!.style.display=="block")
    document.getElementById("c6")!.style.display="none";
    else
    {document.getElementById("c6")!.style.display="block";}
  }
  livers(){
    if(document.getElementById("c7")!.style.display=="block")
    document.getElementById("c7")!.style.display="none";
    else
    {document.getElementById("c7")!.style.display="block";}
  }
  pancreas(){
    if(document.getElementById("c8")!.style.display=="block")
    document.getElementById("c8")!.style.display="none";
    else
    {document.getElementById("c8")!.style.display="block";}
  }
  thyroids(){
    if(document.getElementById("c9")!.style.display=="block")
    document.getElementById("c9")!.style.display="none";
    else
    {document.getElementById("c9")!.style.display="block";}
  }
  diabetess(){
    if(document.getElementById("c10")!.style.display=="block")
    document.getElementById("c10")!.style.display="none";
    else
    {document.getElementById("c10")!.style.display="block";}
  }
  ids(){
    if(document.getElementById("c11")!.style.display=="block")
    document.getElementById("c11")!.style.display="none";
    else
    {document.getElementById("c11")!.style.display="block";}
  }
  mgs(){
    if(document.getElementById("c12")!.style.display=="block")
    document.getElementById("c12")!.style.display="none";
    else
    {document.getElementById("c12")!.style.display="block";}
  }
  nds(){
    if(document.getElementById("c13")!.style.display=="block")
    document.getElementById("c13")!.style.display="none";
    else
    {document.getElementById("c13")!.style.display="block";}
  }
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