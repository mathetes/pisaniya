import React from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import data from './BibleBooksParams.js';

const styleConfig = {
  icons: {
    TableHeadingCell: {
      sortDescendingIcon: <small>(desc)</small>,
      sortAscendingIcon: <small>(asc)</small>
    }
  },
  classNames: {
    Row: 'row-class'
  },
  styles: {
  Table: { margin: "0 auto", textAlign:"left", borderBottom: "1px solid hsla(0,0%,0%,0.12)", paddingTop: "0.75rem", paddingBottom: "calc(0.75rem - 1px)"},
  TableHeading: { display: "table-header-group", verticalAlign: "middle", borderColor: "inherit", backgroundColor: "#222", color: "#fff", textTransform: "uppercase" },
  TableHeadingCell: { textAlign: "center", borderBottom: "1px solid hsla(0,0%,0%,0.12)", fontFeatureSettings: "tnum",paddingLeft: "1rem", paddingRight: "1rem", paddingTop: "0.75rem", paddingBottom: "calc(0.75rem - 1px)" },
  Row: { backgroundColor: "#eee", lineHeight: "2", padingLeft: "15px"},
  Cell: { textAlign:" left", borderBottom: "1px solid hsla(0,0%,0%,0.12)", fontFeatureSettings: "tnum", paddingLeft: "1rem",paddingRight: "1rem", paddingTop: "0.75rem", paddingBottom: "calc(0.75rem - 1px)" },
  Filter: { display: "block", margin: "2em auto", padding: "0.5em 0.25em", border: "none", borderRadius: "0.2em",fontSize: "1.5em", textAlign: "center", boxShadow: "0 0 1em 0.25em rgba(0,0,0,0.2)", width: "50%" },
	PageDropdown: { display: "inline-block", fontSize: "18px", margin: "0 5px", padding: "0 5px", color: "#649",background: "transparent", border: "1px solid #649", height: "32px" },
	NextButton: { display: "inline-block", fontSize: "18px", margin: "0 5px", padding: "0 5px", color: "#649",background: "transparent", border: "1px solid #649", height: "32px" },
	PreviousButton: { display: "inline-block", fontSize: "18px", margin: "0 5px", padding: "0 5px", color: "#649",background: "transparent", border: "1px solid #649", height: "32px", content: "Назад"},
	SettingsToggle: { display: "inline-block", fontSize: "18px", margin: "0 5px", padding: "0 5px", color: "#649",background: "transparent", border: "1px solid #649", height: "32px" },
	Settings: { display: "inline-block", fontSize: "18px", margin: "0 5px", padding: "0 5px", color: "#649",background: "transparent", border: "1px solid #649", height: "32px" }
  }
};

class BiblekeyPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Ключевые параметры книг Библии</h1>
                <Griddle data={data} plugins={[plugins.LocalPlugin]} styleConfig={styleConfig} pageProperties={{currentPage: 1,
                        pageSize: 66,
                        recordCount: 100}}
                      events={{onFilter: (filterText) => { },
                      onSort: (sortProperties) => {},
                      onNext: () => {},
                      onPrevious: () => {},
                      onGetPage: (pageNumber) => {}
              }}>
                <RowDefinition>
                    <ColumnDefinition id="id" title="Номер" order={1} />
                    <ColumnDefinition id="bookName" title="Название" order={2} />
                    <ColumnDefinition id="bookKeyVerse" title="Кл.стих" order={3} />
                    <ColumnDefinition id="bookSubject" title="Предмет" order={4} />
                    <ColumnDefinition id="bookKeyWord" title="Кл.слово" order={5} />
                    <ColumnDefinition id="bookMainTheme" title="Тема" order={6} />
                    <ColumnDefinition id="BookDateWriting" title="Дата написания" visible={false} />
                    <ColumnDefinition id="bookAuthor" title="Автор" visible={false} />
                    <ColumnDefinition id="bookRecipient" title="Получатели" visible={false} />
                    <ColumnDefinition id="bookPlaceWriting" title="Место написания" visible={false} />
                    <ColumnDefinition id="bookChapters" title="Глав" visible={false} />
                    <ColumnDefinition id="bookVerses" title="Стихов" visible={false} />
                    <ColumnDefinition id="bookAllWords" title="Слов" visible={false} />
                    <ColumnDefinition id="bookCovenant" title="Завет" visible={false} />
                    <ColumnDefinition id="bookGanre" title="Жанр" visible={false} />
                </RowDefinition>
              </Griddle>
            </div>
        );
    }
}

export default BiblekeyPage;
