import './App.css';
import MultiStepForm from './multi-step-form/MultiStepForm'
import NestedList from './nested-list/NestedList';
import Formik from './formik/Formik';
import Multi_Step_Form from './old-multi-step-form/Multi_Step_Form';
import Cascading_DropDown from './old-multi-step-form/Cascading_DropDown';
import Form from './bootstrap/form/Form';
import Formik2 from './formik2/Formik2';
import Formik2Step from './formik2/Formik2Step';
import FormikMultiStep from './old-multi-step-form/FormikMultiStep';
import AddProductForm from './travel-web/AddProductForm';

function App() {
  return (
   <>
   App.js
    {/* <MultiStepForm/> */}
    {/* <NestedList/> */}
    {/* <Formik/> */}
    <Multi_Step_Form/>
    <br/><hr/>
    <FormikMultiStep/>
    <br/><hr/>
    {/* <Cascading_DropDown/> */}
    {/* <br/><br/><hr/>
    <Form/> */}
    {/* <Formik2/> */}
    {/* <Formik2Step/> */}
    <AddProductForm/>
   </>
 
  );
}

export default App;
