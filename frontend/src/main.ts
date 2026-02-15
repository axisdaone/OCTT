import './style.css'
import { setupAuth, logout } from './login'
import { timetableData } from './timetable'

// ===============================
// TAB FUNCTIONALITY
// ===============================

function setupTabs(): void {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuLinks = document.querySelectorAll('.menu-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Hamburger menu toggle
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

    // Menu link clicks - switch tabs and close menu
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetTab = link.getAttribute('data-tab');
            if (!targetTab) return;

            // Remove active class from all links and contents
            menuLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked link and corresponding content
            link.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }

            // Close hamburger menu
            if (hamburgerBtn && mobileMenu) {
                hamburgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    });

    // Set initial active state
    const firstLink = document.querySelector('.menu-link[data-tab="oc-timetable"]');
    const firstContent = document.getElementById('oc-timetable');
    if (firstLink) firstLink.classList.add('active');
    if (firstContent) firstContent.classList.add('active');
}

// Make initializeTabs available globally
(window as any).initializeTabs = setupTabs;

// ===============================
// OC TIMETABLE FUNCTIONALITY
// ===============================

function setupOCTimetable(): void {
    const dropdown = document.getElementById("ocName") as HTMLSelectElement;
    const daySelect = document.getElementById("day") as HTMLSelectElement;
    const resultDiv = document.getElementById("result") as HTMLElement;
    const checkBtn = document.getElementById("checkBtn") as HTMLButtonElement;

    if (!dropdown || !daySelect || !resultDiv || !checkBtn) return;

    // Populate dropdown
    Object.keys(timetableData)
        .sort()
        .forEach(name => {
            const option = document.createElement("option");
            option.value = name;
            option.textContent = name;
            dropdown.appendChild(option);
        });

    checkBtn.addEventListener("click", () => {
        showTimetable(dropdown, daySelect, resultDiv);
    });
}

function showTimetable(
    dropdown: HTMLSelectElement,
    daySelect: HTMLSelectElement,
    resultDiv: HTMLElement
): void {

    const nameInput = dropdown.value;
    const day = daySelect.value;

    const student = timetableData[nameInput];

    if (!student) {
        resultDiv.innerHTML =
            `<span style="color:red;font-weight:bold;">
                Student name not found.
            </span>`;
        return;
    }

    const scheduleText = student[day] as string | undefined;

    if (!scheduleText) {
        resultDiv.innerHTML =
            `<div class="schedule-card">
                No classes scheduled for ${day}.
            </div>`;
        return;
    }

    const sessions = scheduleText
        .split(",")
        .map(s => s.trim());

    // Process each session to extract time and subject
    const timeSlots = sessions.map(session => {
        // Handle time range sessions: "09.00-11.30: Lab"
        const timeRangeMatch = session.match(/(\d{2}\.\d{2})-(\d{2}\.\d{2}):\s*(.+)/);
        if (timeRangeMatch) {
            const startTime = timeRangeMatch[1].replace('.', ':');
            const endTime = timeRangeMatch[2].replace('.', ':');
            const subject = timeRangeMatch[3].trim();
            const timeDisplay = `${startTime} - ${endTime}`;
            return { time: timeDisplay, subject };
        }
        
        // Handle single time sessions: "13.00-14.00: TE"
        const singleTimeMatch = session.match(/(\d{2}\.\d{2}):\s*(.+)/);
        if (singleTimeMatch) {
            const timeDisplay = `${singleTimeMatch[1].replace('.', ':')} - ${singleTimeMatch[2].replace('.', ':')}`;
            return { time: timeDisplay, subject: singleTimeMatch[3].trim() };
        }
        
        // Handle sessions without time: "DBS, PAO"
        else {
            return { time: '', subject: session.trim() };
        }
    }).filter((slot): slot is { time: string; subject: string } => slot !== null);

    // Create time slots with proper break handling
    const processedSlots: { time: string; subject: string }[] = [];
    let currentTime = 8; // Start from 8 AM
    
    timeSlots.forEach((slot: { time: string; subject: string }) => {
        if (slot.time.includes('-')) {
            // Time range session - add as is
            const subjects = slot.subject.split(',').map((s: string) => s.trim());
            subjects.forEach((subject) => {
                processedSlots.push({ time: slot.time, subject });
            });
            // Update current time to the end of this session
            const endTime = parseInt(slot.time.split('-')[1]);
            if (endTime > currentTime) {
                currentTime = endTime;
            }
        } else if (slot.time !== '') {
            // Subject without time - assign sequential slots
            const subjects = slot.subject.split(',').map((s: string) => s.trim());
            subjects.forEach((subject, index) => {
                // Simple sequential assignment: 8-9, 9-10, 10-11, 11-12, 12-1, 1-2, 2-3, 3-4
                const slotStart = currentTime + index;
                const slotEnd = slotStart + 1;
                const timeSlot = `${slotStart.toString().padStart(2, '0')}:00 - ${slotEnd.toString().padStart(2, '0')}`;
                processedSlots.push({ time: timeSlot, subject });
                currentTime++;
            });
        }
    });

    // Check if there's any lab in the schedule
    const hasLab = sessions.some(session => session.toLowerCase().includes('lab'));

    // Determine day type badge
    let dayTypeBadge = '';
    if (hasLab) {
        dayTypeBadge = '<div class="full-day-badge">Full Day With Lab</div>';
    } else if (timeSlots.length > 0) {
        dayTypeBadge = '<div class="half-day-badge">Half Day</div>';
    }

    if (processedSlots.length > 0) {
        const verticalSchedule = processedSlots
            .map(slot => `<div class="schedule-item">${slot.time} - ${slot.subject}</div>`)
            .join("");

        resultDiv.innerHTML = `
            <div class="schedule-card" style="margin-top:20px;">
                ${dayTypeBadge}
                <div style="font-size:18px;font-weight:600;color:#fff;">
                    ${nameInput}
                </div>
                <div class="vertical-list">
                    ${verticalSchedule}
                </div>
            </div>`;
    } else {
        resultDiv.innerHTML = `
            <div class="schedule-card" style="margin-top:20px;">
                <div style="font-size:18px;font-weight:600;color:#fff;">
                    ${nameInput}
                </div>
                <div class="schedule-item">No classes scheduled</div>
            </div>`;
    }
}

// ===============================
// AVAILABILITY CHECK FUNCTIONALITY
// ===============================

function setupAvailabilityCheck(): void {
    const checkBtn = document.getElementById('checkAvailabilityBtn');
    const timeInput = document.getElementById('checkTime') as HTMLInputElement;
    const daySelect = document.getElementById('checkDay') as HTMLSelectElement;
    const resultDiv = document.getElementById('availabilityResult');

    if (!checkBtn || !timeInput || !daySelect || !resultDiv) return;

    checkBtn.addEventListener('click', () => {
        const selectedTime = timeInput.value;
        const selectedDay = daySelect.value;

        if (!selectedTime) {
            resultDiv.innerHTML = '<div style="color: var(--accent);">Please select a time to check availability.</div>';
            return;
        }

        const availableOCs: string[] = [];
        const busyOCs: string[] = [];

        Object.keys(timetableData).forEach(ocName => {
            const schedule = timetableData[ocName][selectedDay] as string;
            
            if (!schedule) {
                availableOCs.push(ocName);
                return;
            }

            const isBusy = isOCBusyAtTime(schedule, selectedTime);
            
            if (isBusy) {
                busyOCs.push(ocName);
            } else {
                availableOCs.push(ocName);
            }
        });

        displayAvailabilityResults(availableOCs, busyOCs, selectedTime, selectedDay, resultDiv);
    });
}

function isOCBusyAtTime(schedule: string, checkTime: string): boolean {
    const sessions = schedule.split(',').map(s => s.trim());

    for (const session of sessions) {
        // Parse time range sessions: "09.00-11.30: Lab"
        const timeRangeMatch = session.match(/(\d{2}\.\d{2})-(\d{2}\.\d{2}):\s*(.+)/);
        if (timeRangeMatch) {
            const startTime = timeRangeMatch[1].replace('.', ':');
            const endTime = timeRangeMatch[2].replace('.', ':');
            
            if (isTimeInRange(checkTime, startTime, endTime)) {
                return true;
            }
        }
        
        // Parse single time sessions: "09.00-10.00: Subject"
        const singleTimeMatch = session.match(/(\d{2}\.\d{2})-(\d{2}\.\d{2}):\s*(.+)/);
        if (singleTimeMatch) {
            const startTime = singleTimeMatch[1].replace('.', ':');
            const endTime = singleTimeMatch[2].replace('.', ':');
            
            if (isTimeInRange(checkTime, startTime, endTime)) {
                return true;
            }
        }
    }

    return false;
}

function isTimeInRange(checkTime: string, startTime: string, endTime: string): boolean {
    const check = timeToMinutes(checkTime);
    const start = timeToMinutes(startTime);
    const end = timeToMinutes(endTime);
    
    return check >= start && check <= end;
}

function timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}

function displayAvailabilityResults(
    available: string[], 
    busy: string[], 
    time: string, 
    day: string, 
    resultDiv: HTMLElement
): void {
    let html = `
        <div class="week-header">Availability for ${day} at ${time}</div>
        <div class="availability-list">
    `;

    if (available.length > 0) {
        html += `
            <div style="margin-bottom: 20px;">
                <div class="availability-name status-available">Available (${available.length})</div>
                ${available.map(name => `
                    <div class="availability-item">
                        <div class="availability-name">${name}</div>
                        <div class="availability-status status-available">Free at this time</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    if (busy.length > 0) {
        html += `
            <div>
                <div class="availability-name status-busy">Busy (${busy.length})</div>
                ${busy.map(name => `
                    <div class="availability-item">
                        <div class="availability-name">${name}</div>
                        <div class="availability-status status-busy">Has class at this time</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    html += '</div>';
    resultDiv.innerHTML = html;
}

// ===============================
// ALL OCs WEEK VIEW FUNCTIONALITY
// ===============================

function setupAllOCsView(): void {
    const viewBtn = document.getElementById('viewWeekBtn');
    const ocSelect = document.getElementById('ocSelect') as HTMLSelectElement;
    const resultDiv = document.getElementById('weekResult');

    if (!viewBtn || !ocSelect || !resultDiv) return;

    // Populate OC dropdown
    Object.keys(timetableData).sort().forEach(ocName => {
        const option = document.createElement('option');
        option.value = ocName;
        option.textContent = ocName;
        ocSelect.appendChild(option);
    });

    viewBtn.addEventListener('click', () => {
        const selectedOC = ocSelect.value;

        if (!selectedOC) {
            resultDiv.innerHTML = '<div style="color: var(--accent);">Please select an OC to view their timetable.</div>';
            return;
        }

        displayWeekTimetable(selectedOC, timetableData[selectedOC], resultDiv);
    });
}

function displayWeekTimetable(ocName: string, schedule: any, resultDiv: HTMLElement): void {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    let html = `
        <div class="week-header">Complete Week Timetable - ${ocName}</div>
        <div class="week-timetable">
    `;

    days.forEach(day => {
        const daySchedule = schedule[day] as string;
        html += `
            <div class="day-schedule">
                <div class="day-name">${day}</div>
                <div class="schedule-details">
                    ${daySchedule || 'No classes scheduled'}
                </div>
            </div>
        `;
    });

    html += '</div>';
    resultDiv.innerHTML = html;
}

// ===============================
// INITIALIZE EVERYTHING
// ===============================

document.addEventListener('DOMContentLoaded', () => {
    setupAuth();
    
    // Check if user is already logged in
    if (sessionStorage.getItem("isLoggedIn") === "true") {
        // Show full-screen app directly
        const loginContainer = document.getElementById("loginContainer");
        const appContainer = document.getElementById("appContainer");
        
        if (loginContainer) loginContainer.style.display = "none";
        if (appContainer) appContainer.style.display = "flex";
        
        // Initialize all functionality
        setupTabs();
        setupOCTimetable();
        setupAvailabilityCheck();
        setupAllOCsView();
        
        // Setup logout button
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', logout);
        }
    }
});

// Export initializeTabs for login.ts to call
(window as any).initializeTabs = () => {
    console.log('Initializing tabs after login...');
    
    // Setup all tab functionality
    setupTabs();
    setupOCTimetable();
    setupAvailabilityCheck();
    setupAllOCsView();
    
    // Setup logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
        console.log('Logout button setup complete');
    }
    
    console.log('All tabs initialized successfully');
};
