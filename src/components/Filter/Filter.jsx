import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

export const Filter = ({ value, onChange }) => (
  <Form>
    <Form.Group className="mb-3" controlId="formBasicFilter">
      <Form.Label className="mb-1"> Find contacts by name</Form.Label>
      <Form.Control
        type="text"
        placeholder="..."
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  </Form>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
