import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addTech } from '../../actions/techActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AddTechModal = ({ addTech }) => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  const onSubmit = () => {
    if (name === '' || lastname === '') {
      M.toast({ html: 'Please Enter Name and Lastname' });
    } else {
      addTech({
        name,
        lastname,
      });

      M.toast({ html: `${name} ${lastname} was added as a tech` });

      //Clear Fields
      setName('');
      setLastname('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='name' className='active'>
              Technician Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastname'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <label htmlFor='lastname' className='active'>
              Technician Lastname
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-green btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
