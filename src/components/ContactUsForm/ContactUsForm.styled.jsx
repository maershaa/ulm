import styled from '@emotion/styled';

export const FormContainer = styled.div`
 max-width: 100%;
  /* width: 370px;  */
  margin: 0 auto; 
    padding: 50px 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 625px) {
    width: 370px; 
  }

  @media (min-width: 768px) {
    width: 400px; 
  }

  @media (min-width: 1024px) {
    width: 420px; 
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: #333;

  @media (min-width: 625px) {
    font-size: 1rem;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  box-sizing: border-box;

  @media (min-width: 625px) {
    font-size: 1rem;
  }

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  box-sizing: border-box;

  @media (min-width: 625px) {
    font-size: 1rem;
  }

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const FormButton = styled.button`
    cursor: pointer;

    padding: 0.75rem 1.10rem;
  text-transform: uppercase;
  border-radius: 4px;
  border: none; 
  
  font-size: 0.9rem; 



  background-color: var(--accent-color);
  color: #fff; 


  transition: background-color 0.3s ease; 

  @media (min-width: 625px) {
    font-size: 1rem;
  }

  &:hover {
    background-color: #196f97;
  }
`;
