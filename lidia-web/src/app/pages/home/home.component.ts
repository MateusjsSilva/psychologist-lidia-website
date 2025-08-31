import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  activeSection: string = '';
  isMobileMenuOpen: boolean = false;
  private scrollListener!: () => void;
  private isScrolling: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.scrollListener = () => this.updateActiveSection();
    window.addEventListener('scroll', this.scrollListener);
    this.updateActiveSection();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollListener);
  }

  scrollTo(fragment: string): void {
    if (this.isScrolling) return;
    
    const element = document.getElementById(fragment);
    if (element) {
      this.isScrolling = true;
      const headerOffset = 100;
      const elementPosition = element.offsetTop;
      const targetPosition = elementPosition - headerOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let start: number | null = null;

      const animateScroll = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        const easeInOutCubic = (t: number): number => {
          return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };
        
        const currentPosition = startPosition + distance * easeInOutCubic(percentage);
        window.scrollTo(0, currentPosition);

        if (percentage < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          this.isScrolling = false;
        }
      };

      requestAnimationFrame(animateScroll);
    }
  }

  scrollToMobile(fragment: string): void {
    this.closeMobileMenu();
    setTimeout(() => {
      this.scrollTo(fragment);
    }, 300);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  private updateActiveSection(): void {
    if (this.isScrolling) return; 
    
    const sections = ['inicio', 'servicos', 'sobre', 'localizacao', 'contato'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;
          return;
        }
      }
    }
    this.activeSection = '';
  }
}
