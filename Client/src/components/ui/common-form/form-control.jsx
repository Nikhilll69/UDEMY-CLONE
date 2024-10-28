import React from 'react'
import { Textarea } from '../textarea';
import { Label } from '../label';
import { Select } from '../select';
import { Input } from '../input';
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';
import { Button } from '../button';


function FormControls({ formControls=[],formData,setFormData})
{
function renderComponentByType(getControlItem){
    let element=null;
    switch (getControlItem.componentType){
        case 'input':
            element=<Input
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            
            />
            break;
        case 'select':
            element=<Select>
                <SelectTrigger className='w-full'>
                    <SelectValue placeholder={getControlItem.label}/>
                </SelectTrigger>
                <SelectContent>
                    {
                        getControlItem.options && getControlItem.options.length>0?
                        getControlItem.options.map(optionItem=> <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>): null
                    }
                </SelectContent>
            </Select>
            break;
         case 'textarea':
            element=<Textarea
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            />
            break;
          default :
            element=<Input
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}/>; 
    


    }
    return element
}

  return (
   <div className='flex flex-col gap-3'>
    {
        formControls.map(controleItems=>
            <div key={controleItems.name}>
                <Label htmlFor={controleItems.name}>{controleItems.label}</Label>
                {
                    renderComponentByType(controleItems)
                }
            </div>
        )
     
    }
   </div>
  )
}

export default FormControls