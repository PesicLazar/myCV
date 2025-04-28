import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  project: Project[] = []; // Store all projects
  filteredProjects: Project[] = []; // Store the filtered projects
  selectedTags: Set<Tag> = new Set(); // Track selected tags
  tags = [
    Tag.tagAngular,
    Tag.tagPyhton,
    Tag.tagTypescript,
    Tag.tagJava,
    Tag.tagExcel,
  ];

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.project = this.projectService.GetProjects();
    this.filteredProjects = this.project; // Initially show all projects
  }

  toggleSelection(tag: Tag): void {
    if (this.selectedTags.has(tag)) {
      this.selectedTags.delete(tag);
    } else {
      this.selectedTags.add(tag);
    }
    this.filterProjects();
  }

  filterProjects(): void {
    if (this.selectedTags.size === 0) {
      this.filteredProjects = this.project; // If no tags are selected, show all projects
    } else {
      this.filteredProjects = this.project.filter((project) =>
        project.tags.some((tag) => this.selectedTags.has(tag))
      );
    }
  }

  isSelected(tag: Tag): boolean {
    return this.selectedTags.has(tag);
  }
}
