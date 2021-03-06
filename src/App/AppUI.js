import React from 'react';
import { SerieContext } from '../SerieContext';
import { SeriesCounter } from '../SeriesCounter';
import { SeriesSearch } from '../SeriesSearch';
import { SeriesList } from '../SeriesList';
import { SeriesItem } from '../SeriesItem';
import { ContainerSection } from '../ContainerSection';
import { CardComponent } from '../CardComponent';
import { SeriesInput } from '../SeriesInput';
import { GenericWrapper } from '../GenericWrapper';
import { AddSerieButton } from '../AddSerieButton';
import { CreateSerieButton } from '../CreateSerieButton';
import { Modal } from '../Modal';
import { SerieForm } from '../SerieForm';

function AppUI() {
  const {
    error, 
    loading, 
    modalStatus,
    deleteSerie, 
    completeSerie, 
    searchedSeries
  } = React.useContext(SerieContext);

    return (
        <React.Fragment>
          <ContainerSection>
            <CardComponent>
              <SeriesInput />
              <AddSerieButton />
            </CardComponent>
          </ContainerSection>
    
          <ContainerSection>
            <GenericWrapper>
              <SeriesCounter />
              
              <SeriesSearch />
    
              <SeriesList>
                {error && <p className='alert alert-danger'>Ocurrio un error</p>}
                {loading && <p className='alert alert-primary'>Cargando información</p>}
                {(!loading && !searchedSeries.length) && <p className='alert alert-info'>No tienes series guardadas</p>}

                {searchedSeries.map( serie => (
                  <SeriesItem 
                    key={serie.title} 
                    text={serie.title} 
                    completed={serie.completed}
                    onComplete={()=>{completeSerie(serie.title)}}
                    onDelete={()=>{deleteSerie(serie.title)}}
                  />
                ))}
              </SeriesList>
              
              {modalStatus && (<Modal>
                <SerieForm />
              </Modal>)}

              <CreateSerieButton />
            </GenericWrapper>
          </ContainerSection>
        </React.Fragment>
    );
}

export {AppUI};