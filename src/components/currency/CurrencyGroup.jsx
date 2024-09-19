import Select from '../ui/form/select';
import Input from '../ui/form/Input';

const CurrencyGroup = ({ options, inputId, inputValue, selectValue, selectId, onSelect, onInput }) => {
  return (
    <div className="form-control">
      <Select id={selectId} name={selectId} value={selectValue || 'USD'} onChange={onSelect}>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Select>
      <Input
        type="number"
        id={inputId}
        name={inputId}
        placeholder="type a number"
        value={inputValue}
        onChange={onInput}
        step="any"
      />
    </div>
  );
};

export default CurrencyGroup;
