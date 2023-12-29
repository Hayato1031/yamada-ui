import{j as e,a as s,F as Q}from"./jsx-runtime-5BUNAZ9W.js";import{r as u}from"./index-4g5l5LRQ.js";import{u as Ee,C as Me}from"./index.esm-rcUR5vC1.js";import{c as Qe}from"./components-3OPBmy2V.js";import{t as Xe}from"./index-BvS90inx.js";import{u as Ye}from"./index--H2JViwD.js";import{a as Oe,u as eo,f as q,F as S}from"./form-control-PjPXCVZQ.js";import{F as oo,W as _e}from"./flex-7AocSjfr.js";import{g as J,w as ao,c as io,v as no,a as He,o as Te,p as Y,Z as ro,u as x,R as E,K as y,h as g}from"./factory-d-SMqVb2.js";import{u as to}from"./use-component-style-PZEwb5ud.js";import{o as lo}from"./theme-provider-ra3mBbD9.js";import{H as uo,V as ze}from"./stack-LEtCveQr.js";import{B as Ke}from"./button-EhfgdiYF.js";import{B as ee}from"./box-cQy_yevs.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-UGPyZe_z.js";import"./mapValues-_vaJbJvv.js";import"./_basePickBy-nbC0p6ki.js";import"./isPlainObject-OQ1vr7Ox.js";import"./index-PPLHz8o0.js";import"./ui-provider-Mchkpo2u.js";import"./environment-provider-9v4vA1qk.js";import"./motion-ukEXpwwk.js";import"./loading-provider-81cExCED.js";import"./index-LMlayQyA.js";import"./Combination-8oCz4vin.js";import"./loading-PFbLA4vV.js";import"./index-as8PIm5E.js";import"./index-JersHic9.js";import"./index-JczG5yj_.js";import"./icon-tPRIl-kA.js";import"./forward-ref-A-8Arhkk.js";import"./motion-8v_Pxw1E.js";import"./index-EargzzxG.js";import"./container-portal-wAmMmLVa.js";import"./index-jmm5gWkb.js";import"./notice-z1BT5SGZ.js";import"./alert-j7LpJe_Q.js";import"./close-button-FADIJ_zZ.js";import"./use-ripple-Z-W-SYoZ.js";import"./container-ytL5YPat.js";import"./text-2jUpFeVy.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";const so=i=>i&&Y(i)&&Y(i.target),je=({id:i,name:c,isNative:a,...r})=>{i??(i=u.useId()),c??(c=`radio-${i}`),r.onChange=J(r.onChange);const[l,d]=Ye({value:r.value,defaultValue:r.defaultValue,onChange:r.onChange}),m=u.useRef(null),t=u.useCallback(()=>{const h=m.current;if(!h)return;let p="input:not(:disabled):checked",R=h.querySelector(p);R?R.focus():(p="input:not(:disabled)",R=h.querySelector(p),R==null||R.focus())},[]),v=u.useCallback(h=>{const p=so(h)?h.target.value:h;d(p)},[d]),k=u.useCallback((h={},p=null)=>({...h,ref:ao(p,m),role:"group"}),[]),F=u.useCallback((h={},p=null)=>({...h,ref:p,name:c,[a?"checked":"isChecked"]:l!=null?h.value===l:void 0,onChange:v}),[c,l,v,a]);return{name:c,value:l,setValue:d,onChange:v,onFocus:t,getContainerProps:k,getRadioProps:F}},[co,mo]=io({strict:!1,name:"RadioGroupContext"}),C=u.forwardRef(({className:i,size:c,variant:a,colorScheme:r,children:l,items:d=[],direction:m="column",gap:t,...v},k)=>{const{name:F,value:h,onChange:p,getContainerProps:R}=je(v),{isRequired:D,isReadOnly:B,isDisabled:b,isInvalid:w}=Oe(v),I=no(l);let f=[];return!I.length&&d.length&&(f=d.map(({label:N,value:P,...G},W)=>e(o,{value:P,...G,children:N},W))),e(co,{value:{size:c,variant:a,colorScheme:r,isRequired:D,isReadOnly:B,isDisabled:b,isInvalid:w,name:F,value:h,onChange:p},children:e(oo,{ref:k,className:He("ui-radio-group",i),gap:t??(m==="row"?"1rem":void 0),...R(Te(v,["onChange","isInvalid","isDisabled","isRequired","isReadOnly"])),direction:m,children:l??f})})});C.displayName="RadioGroup";const Ue=i=>{const{id:c,name:a,value:r,required:l,disabled:d,readOnly:m,...t}=eo(i),[v,k]=u.useState(!1),[F,h]=u.useState(!1),[p,R]=u.useState(!1),[D,B]=u.useState(!1),[b,w]=u.useState(!!i.defaultIsChecked),I=i.isChecked!==void 0,f=I?i.isChecked:b;u.useEffect(()=>Xe(k),[]);const N=J(n=>{var A;if(m||d){n.preventDefault();return}I||w(n.target.checked),(A=t.onChange)==null||A.call(t,n)},[m,d,I]),P=J(t.onBlur),G=J(t.onFocus),W=u.useCallback(({key:n})=>{n===" "&&B(!0)},[B]),X=u.useCallback(({key:n})=>{n===" "&&B(!1)},[B]),Le=u.useCallback((n={},A=null)=>({...E(t,q),...n,ref:A,"data-checked":y(f)}),[f,t]),Ze=u.useCallback((n={},A=null)=>({...E(t,q),...n,ref:A,"data-active":y(D),"data-hover":y(p),"data-checked":y(f),"data-focus":y(F),"data-focus-visible":y(F&&v),"aria-hidden":!0,onMouseDown:g(n.onMouseDown,()=>B(!0)),onMouseUp:g(n.onMouseUp,()=>B(!1)),onMouseEnter:g(n.onMouseEnter,()=>R(!0)),onMouseLeave:g(n.onMouseLeave,()=>R(!1))}),[f,D,F,v,p,t]),$e=u.useCallback((n={},A=null)=>({...E(t,q),...n,ref:A,id:c,type:"radio",name:a,value:r,required:l,disabled:d,readOnly:m,checked:f,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:g(n.onChange,N),onBlur:g(n.onBlur,P,()=>h(!1)),onFocus:g(n.onFocus,G,()=>h(!0)),onKeyDown:g(n.onKeyDown,W),onKeyUp:g(n.onKeyUp,X)}),[t,c,a,r,l,d,m,f,N,P,G,W,X]),Je=u.useCallback((n={},A=null)=>({...E(t,q),props:n,ref:A,onMouseDown:g(n.onMouseDown,V=>{V.preventDefault(),V.stopPropagation()}),onTouchStart:g(n.onTouchStart,V=>{V.preventDefault(),V.stopPropagation()}),"data-checked":y(f)}),[f,t]);return{isFocusVisible:v,isFocused:F,isHovered:p,isActive:D,isChecked:f,getContainerProps:Le,getInputProps:$e,getIconProps:Ze,getLabelProps:Je}},o=u.forwardRef((i,c)=>{const a=mo(),r=Oe(i),[l,d]=to("Radio",{...a,...i}),{className:m,gap:t="0.5rem",isRequired:v=(a==null?void 0:a.isRequired)??r.isRequired,isReadOnly:k=(a==null?void 0:a.isReadOnly)??r.isReadOnly,isDisabled:F=(a==null?void 0:a.isDisabled)??r.isDisabled,isInvalid:h=(a==null?void 0:a.isInvalid)??r.isInvalid,iconProps:p,inputProps:R,labelProps:D,children:B,...b}=lo(d),{getContainerProps:w,getInputProps:I,getIconProps:f,getLabelProps:N}=Ue({...b,isRequired:v,isReadOnly:k,isDisabled:F,isInvalid:h,isChecked:a!=null&&a.value&&b.value?a.value===b.value:b.isChecked,onChange:a!=null&&a.onChange&&b.value?ro(a.onChange,b.onChange):b.onChange});return s(x.label,{className:He("ui-radio",m),...w(),...Te(b,["id","name","value","defaultValue","defaultIsChecked","isChecked","onChange","onBlur","onFocus"]),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:t,...l.container},children:[e(x.input,{className:"ui-radio__input",...I(R,c)}),e(x.span,{className:"ui-radio__icon",...f(p),__css:{position:"relative",display:"inline-block",userSelect:"none",...l.icon}}),e(x.span,{className:"ui-radio__label",...N(D),__css:{...l.label},children:B})]})});o.displayName="Radio";const aa={title:"Components / Forms / Radio",component:o},M=()=>e(o,{children:"孫悟空"}),O=()=>s(_e,{gap:"md",children:[e(o,{size:"sm",children:"孫悟空"}),e(o,{size:"md",children:"ベジータ"}),e(o,{size:"lg",children:"フリーザ"})]}),_=()=>e(o,{defaultIsChecked:!0,children:"孫悟空"}),H=()=>e(_e,{gap:"md",children:Qe.map(i=>e(o,{colorScheme:i,defaultIsChecked:!0,children:i},i))}),T=()=>s(Q,{children:[e(o,{isDisabled:!0,children:"All Notifications"}),e(o,{isDisabled:!0,defaultIsChecked:!0,children:"All Notifications"}),s(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isDisabled:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(S,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultIsChecked:!0,children:"All Notifications"})}),e(S,{isDisabled:!0,label:"Which notifications would you like to receive?",children:s(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),z=()=>s(Q,{children:[e(o,{isReadOnly:!0,children:"All Notifications"}),e(o,{isReadOnly:!0,defaultIsChecked:!0,children:"All Notifications"}),s(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isReadOnly:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(S,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultIsChecked:!0,children:"All Notifications"})}),e(S,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:s(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),K=()=>s(Q,{children:[e(o,{isInvalid:!0,children:"All Notifications"}),e(o,{isInvalid:!0,defaultIsChecked:!0,children:"All Notifications"}),s(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isInvalid:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(S,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(o,{children:"All Notifications"})}),e(S,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:s(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),j=()=>s(Q,{children:[s(C,{defaultValue:"孫悟空",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),s(C,{direction:"row",defaultValue:"孫悟空",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),e(C,{defaultValue:"孫悟空",items:[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}]})]}),U=()=>{const[i,c]=u.useState("孫悟空");return s(C,{value:i,onChange:a=>c(a),children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})},L=()=>{const i=r=>{const{getInputProps:l,getIconProps:d}=Ue(r);return s(ee,{as:"label",children:[e(x.input,{...l(),"aria-label":r.value}),e(ee,{...d(),cursor:"pointer",borderWidth:"1px",py:"xs",px:"sm",rounded:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},children:r.value})]})},{getContainerProps:c,getRadioProps:a}=je({defaultValue:"孫悟空"});return s(uo,{gap:"sm",...c(),children:[e(i,{...a({value:"孫悟空"})}),e(i,{...a({value:"ベジータ"})}),e(i,{...a({value:"フリーザ"})})]})},Z=()=>{var d;const{control:i,handleSubmit:c,watch:a,formState:{errors:r}}=Ee(),l=m=>console.log("submit:",m);return console.log("watch:",a()),s(ze,{as:"form",onSubmit:c(l),children:[e(S,{isInvalid:!!r.radio,label:"Who is your favorite character?",errorMessage:(d=r.radio)==null?void 0:d.message,children:e(Me,{name:"radio",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:m})=>s(C,{...m,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(Ke,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},$=()=>{var m;const i={radio:"孫悟空"},{control:c,handleSubmit:a,watch:r,formState:{errors:l}}=Ee({defaultValues:i}),d=t=>console.log("submit:",t);return console.log("watch:",r()),s(ze,{as:"form",onSubmit:a(d),children:[e(S,{isInvalid:!!l.radio,label:"Who is your favorite character?",errorMessage:(m=l.radio)==null?void 0:m.message,children:e(Me,{name:"radio",control:c,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>s(C,{...t,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(Ke,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var oe,ae,ie;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(ie=(ae=M.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var ne,re,te;O.parameters={...O.parameters,docs:{...(ne=O.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio size="sm">孫悟空</Radio>
      <Radio size="md">ベジータ</Radio>
      <Radio size="lg">フリーザ</Radio>
    </Wrap>;
}`,...(te=(re=O.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var le,ue,se;_.parameters={..._.parameters,docs:{...(le=_.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <Radio defaultIsChecked>孫悟空</Radio>;
}`,...(se=(ue=_.parameters)==null?void 0:ue.docs)==null?void 0:se.source}}};var de,ce,me;H.parameters={...H.parameters,docs:{...(de=H.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Radio key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Radio>)}
    </Wrap>;
}`,...(me=(ce=H.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var he,pe,fe;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <>
      <Radio isDisabled>All Notifications</Radio>
      <Radio isDisabled defaultIsChecked>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio value="important" isDisabled>
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <Radio defaultIsChecked>All Notifications</Radio>
      </FormControl>

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </FormControl>
    </>;
}`,...(fe=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var ve,Re,Ce;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <>
      <Radio isReadOnly>All Notifications</Radio>
      <Radio isReadOnly defaultIsChecked>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio value="important" isReadOnly>
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <Radio defaultIsChecked>All Notifications</Radio>
      </FormControl>

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </FormControl>
    </>;
}`,...(Ce=(Re=z.parameters)==null?void 0:Re.docs)==null?void 0:Ce.source}}};var be,ge,Fe;K.parameters={...K.parameters,docs:{...(be=K.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <>
      <Radio isInvalid>All Notifications</Radio>
      <Radio isInvalid defaultIsChecked>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio value="important" isInvalid>
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <Radio>All Notifications</Radio>
      </FormControl>

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </FormControl>
    </>;
}`,...(Fe=(ge=K.parameters)==null?void 0:ge.docs)==null?void 0:Fe.source}}};var Be,Ae,Se;j.parameters={...j.parameters,docs:{...(Be=j.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  const items: RadioItem[] = [{
    label: "孫悟空",
    value: "孫悟空"
  }, {
    label: "ベジータ",
    value: "ベジータ"
  }, {
    label: "フリーザ",
    value: "フリーザ"
  }];
  return <>
      <RadioGroup defaultValue="孫悟空">
        <Radio value="孫悟空">孫悟空</Radio>
        <Radio value="ベジータ">ベジータ</Radio>
        <Radio value="フリーザ">フリーザ</Radio>
      </RadioGroup>

      <RadioGroup direction="row" defaultValue="孫悟空">
        <Radio value="孫悟空">孫悟空</Radio>
        <Radio value="ベジータ">ベジータ</Radio>
        <Radio value="フリーザ">フリーザ</Radio>
      </RadioGroup>

      <RadioGroup defaultValue="孫悟空" items={items} />
    </>;
}`,...(Se=(Ae=j.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source}}};var ke,De,Ie;U.parameters={...U.parameters,docs:{...(ke=U.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <RadioGroup value={value} onChange={value => setValue(value)}>
      <Radio value="孫悟空">孫悟空</Radio>
      <Radio value="ベジータ">ベジータ</Radio>
      <Radio value="フリーザ">フリーザ</Radio>
    </RadioGroup>;
}`,...(Ie=(De=U.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var ye,Ne,we;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  const CustomRadio: FC<ReturnType<UseRadioGroupReturn["getRadioProps"]>> = props => {
    const {
      getInputProps,
      getIconProps
    } = useRadio(props);
    return <Box as="label">
        <ui.input {...getInputProps()} aria-label={props.value} />

        <Box {...getIconProps()} cursor="pointer" borderWidth="1px" py="xs" px="sm" rounded="md" _checked={{
        bg: "blue.500",
        color: "white",
        borderColor: "blue.500"
      }}>
          {props.value}
        </Box>
      </Box>;
  };
  const {
    getContainerProps,
    getRadioProps
  } = useRadioGroup<string>({
    defaultValue: "孫悟空"
  });
  return <HStack gap="sm" {...getContainerProps()}>
      <CustomRadio {...getRadioProps({
      value: "孫悟空"
    })} />
      <CustomRadio {...getRadioProps({
      value: "ベジータ"
    })} />
      <CustomRadio {...getRadioProps({
      value: "フリーザ"
    })} />
    </HStack>;
}`,...(we=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:we.source}}};var Ve,xe,Pe;Z.parameters={...Z.parameters,docs:{...(Ve=Z.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  type Data = {
    radio: string;
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.radio} label="Who is your favorite character?" errorMessage={errors.radio?.message}>
        <Controller name="radio" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <RadioGroup {...field}>
              <Radio value="孫悟空">孫悟空</Radio>
              <Radio value="ベジータ">ベジータ</Radio>
              <Radio value="フリーザ">フリーザ</Radio>
            </RadioGroup>} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Pe=(xe=Z.parameters)==null?void 0:xe.docs)==null?void 0:Pe.source}}};var Ge,We,qe;$.parameters={...$.parameters,docs:{...(Ge=$.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  type Data = {
    radio: string;
  };
  const defaultValues: Data = {
    radio: "孫悟空"
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.radio} label="Who is your favorite character?" errorMessage={errors.radio?.message}>
        <Controller name="radio" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <RadioGroup {...field}>
              <Radio value="孫悟空">孫悟空</Radio>
              <Radio value="ベジータ">ベジータ</Radio>
              <Radio value="フリーザ">フリーザ</Radio>
            </RadioGroup>} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(qe=(We=$.parameters)==null?void 0:We.docs)==null?void 0:qe.source}}};const ia=["basic","withSize","withDefaultIsChecked","withColorScheme","isDisabled","isReadonly","isInvalid","withGroup","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{ia as __namedExportsOrder,M as basic,U as customControl,L as customHook,aa as default,T as isDisabled,K as isInvalid,z as isReadonly,Z as reactHookForm,$ as reactHookFormWithDefaultValue,H as withColorScheme,_ as withDefaultIsChecked,j as withGroup,O as withSize};
