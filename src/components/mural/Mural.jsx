import React, { Component } from 'react';

import Dropdown from '../Dropdown/Dropdown';
import Tag from '../Tag/Tag';
import { getMural, getTags, tagMural, untagMural } from '../../actions/muralActions';

import './styles.css';

class Mural extends Component {
  state = {
    allTags: [],
    mural: {
      title: '',
      imageUrl: '',
      thumbnailUrl: '',
      tags: [],
      createdAt: '',
      updatedAt: ''
    },
    dropdownTags: []
  };

  componentDidMount() {
    getMural()
      .then(response => {
        this.setState({ mural: response.data });
      })
      .catch(error => console.log(error));
    getTags()
      .then(response => {
        const originalTags = response.data;
        const { tags } = this.state.mural;
        const currentTags = originalTags.filter(
          originalTag => !tags.some(t => t.id === originalTag.id)
        );
        this.setState({ allTags: response.data, dropdownTags: currentTags });
      })
      .catch(error => console.log(error));
  }

  addTagToDropdown = tag => {
    const dropdownTags = [...this.state.dropdownTags, tag];
    this.setState({ dropdownTags });
  };

  removeTagFromDropDown = tagId => {
    const dropdownTags = this.state.dropdownTags.filter(dTag => dTag.id != tagId);
    this.setState({ dropdownTags });
  };

  handleDeleteTag = async tag => {
    const { id } = this.state.mural;
    try {
      // send action to remove the selected tag from a mural
      const response = await untagMural(id, tag.id);
      const { tags } = this.state.mural;
      // deleting tag from mural
      const newMuralTags = tags.filter(aTag => aTag.id != tag.id);
      const mural = { ...this.state.mural, tags: newMuralTags };
      // adding removed tag from mural to dropdownTags
      this.addTagToDropdown(tag);
      // udpating mural and dropdownTags state
      this.setState({ mural });
    } catch (error) {
      console.log(error);
    }
  };

  handleSelectTag = async event => {
    const tagId = event.target.value;
    const { id } = this.state.mural;
    try {
      // send action to add the selected tag to a mural
      // We should use response from patch action to update state
      const response = await tagMural(id, tagId);

      const { tags } = this.state.mural;
      const { allTags } = this.state;
      const tag = allTags.filter(aTag => aTag.id == tagId);
      // adding selected tag to mural
      const mural = { ...this.state.mural, tags: [...tags, ...tag] };
      // removing selected tag from dropdownTags state
      this.removeTagFromDropDown(tagId);
      // udpating mural and dropdownTags state
      this.setState({ mural });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { title, imageUrl, tags } = this.state.mural;
    const { dropdownTags } = this.state;
    return (
      <div>
        <Dropdown tags={dropdownTags} onSelectTag={this.handleSelectTag} />
        <h3>{title}</h3>
        <div className="image-container">
          <img src={imageUrl} alt="mural" width={900}></img>
        </div>
        <div className="tags-container">
          {tags.map(tag => (
            <Tag key={tag.id} tag={tag} onDeleteTag={this.handleDeleteTag} />
          ))}
        </div>
      </div>
    );
  }
}

export default Mural;
